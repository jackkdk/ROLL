
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Video from "react-native-video";

export default function LiveScreen() {
  const [msgs, setMsgs] = useState([]);
  const [val, setVal] = useState("");

  const add = () => { const t = val.trim(); if (!t) return; setMsgs(prev => [...prev, { user:"User", text:t }]); setVal(""); };

  return (
    <SafeAreaView style={s.screen}>
      <View style={s.card}>
        <View style={s.playerBox}>
          <Video
            source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
            style={{ width:"100%", height:"100%", backgroundColor:"#000" }}
            resizeMode="contain"
            controls
          />
        </View>
        <View style={{ padding:12 }}>
          <Text style={s.title}>Live Coding Session</Text>
          {msgs.length === 0 ? <Text style={s.muted}>Сообщений пока нет</Text> : msgs.map((m,i)=>(
            <View key={i} style={s.row}><View style={s.avatar}><Text style={s.avatarText}>U</Text></View><Text><Text style={s.bold}>{m.user}</Text> {m.text}</Text></View>
          ))}
          <View style={s.sendRow}>
            <TextInput style={s.input} placeholder="Написать сообщение..." value={val} onChangeText={setVal} />
            <TouchableOpacity style={s.btn} onPress={add}><Text style={s.btnText}>Отправить</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex:1, backgroundColor:"#f6f3ff" },
  card: { backgroundColor:"#ffffffcc", borderRadius:16, overflow:"hidden", margin:12, borderWidth:1, borderColor:"#ffffff70" },
  playerBox: { width:"100%", height:220, backgroundColor:"#000" },
  title: { fontSize:18, fontWeight:"700", marginBottom:8 },
  muted: { color:"#666" },
  row: { flexDirection:"row", alignItems:"flex-start", gap:8, marginTop:8 },
  avatar: { width:22, height:22, borderRadius:11, backgroundColor:"#ddd", alignItems:"center", justifyContent:"center", marginTop:2 },
  avatarText: { fontSize:12, fontWeight:"700", color:"#555" },
  bold: { fontWeight:"700" },
  sendRow: { flexDirection:"row", alignItems:"center", marginTop:10, marginBottom:8 },
  input: { flex:1, height:44, borderRadius:12, borderWidth:1, borderColor:"#eee", backgroundColor:"#fff", paddingHorizontal:12 },
  btn: { backgroundColor:"#6d28d9", paddingHorizontal:14, height:44, borderRadius:12, alignItems:"center", justifyContent:"center", marginLeft:8 },
  btnText: { color:"#fff", fontWeight:"700" }
});
