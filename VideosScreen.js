
import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VideoPlayer from "../components/VideoPlayer";
import CommentSection from "../components/CommentSection";
import UploadButton from "../components/UploadButton";

const VIDS_KEY = "roll_videos_v1";
const COMMENTS_KEY = "roll_comments_v1";

export default function VideosScreen() {
  const [videos, setVideos] = usePersistedArray(VIDS_KEY, []);
  const [commentsByVideo, setCommentsByVideo] = usePersistedObject(COMMENTS_KEY, {});
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return videos;
    return videos.filter(v => v.title.toLowerCase().includes(q));
  }, [videos, query]);

  const addVideo = async () => {
    const res = await DocumentPicker.getDocumentAsync({ type: "video/*", copyToCacheDirectory: true });
    if (res.canceled || !res.assets?.length) return;
    const file = res.assets[0];
    const newVid = { id: Date.now().toString(), title: file.name || "Видео", uri: file.uri };
    setVideos(prev => [newVid, ...prev]);
  };

  const addComment = (id, text) => {
    const entry = { user: "User", text };
    setCommentsByVideo(prev => ({ ...prev, [id]: [ ...(prev[id] || []), entry ] }));
  };

  const renderItem = ({ item }) => (
    <View style={s.card}>
      <VideoPlayer uri={item.uri} />
      <View style={{ padding: 12 }}>
        <Text style={s.title}>{item.title}</Text>
        <CommentSection comments={commentsByVideo[item.id] || []} onAdd={(t) => addComment(item.id, t)} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={s.screen}>
      <View style={s.searchWrap}><TextInput placeholder="Поиск..." value={query} onChangeText={setQuery} style={s.input} /></View>
      <FlatList data={filtered} keyExtractor={(v) => v.id} renderItem={renderItem} contentContainerStyle={{ padding: 12, paddingBottom: 120 }} />
      <UploadButton onPress={addVideo} />
    </SafeAreaView>
  );
}

function usePersistedArray(key, initial) {
  const [val, setVal] = React.useState(initial);
  React.useEffect(() => { AsyncStorage.getItem(key).then(r => { if (r) setVal(JSON.parse(r)); }); }, [key]);
  React.useEffect(() => { AsyncStorage.setItem(key, JSON.stringify(val)); }, [key, val]);
  return [val, setVal];
}

function usePersistedObject(key, initial) {
  const [val, setVal] = React.useState(initial);
  React.useEffect(() => { AsyncStorage.getItem(key).then(r => { if (r) setVal(JSON.parse(r)); }); }, [key]);
  React.useEffect(() => { AsyncStorage.setItem(key, JSON.stringify(val)); }, [key, val]);
  return [val, setVal];
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f6f3ff" },
  searchWrap: { margin: 12, paddingHorizontal: 12, height: 44, backgroundColor: "#fff", borderRadius: 16, borderWidth: 1, borderColor: "#eee", justifyContent:"center" },
  input: { fontSize: 16 },
  card: { backgroundColor: "#ffffffcc", borderRadius: 16, overflow: "hidden", marginBottom: 12, borderWidth: 1, borderColor: "#ffffff70" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 }
});
