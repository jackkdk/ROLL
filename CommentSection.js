
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CommentSection({ comments = [], onAdd }) {
  const [val, setVal] = useState("");
  return (
    <View>
      {comments.length === 0 ? (
        <Text style={s.muted}>Комментариев пока нет</Text>
      ) : (
        comments.map((c, i) => (
          <View key={i} style={s.row}>
            <View style={s.avatar}><Text style={s.avatarText}>U</Text></View>
            <Text><Text style={s.bold}>{c.user}</Text> {c.text}</Text>
          </View>
        ))
      )}
      <View style={s.sendRow}>
        <TextInput style={s.input} placeholder="Написать комментарий..." value={val} onChangeText={setVal} />
        <TouchableOpacity style={s.btn} onPress={() => { const t = val.trim(); if (t) { onAdd(t); setVal(""); } }}>
          <Text style={s.btnText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  muted: { color: "#666" },
  row: { flexDirection: "row", alignItems: "flex-start", gap: 8, marginTop: 8 },
  avatar: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#ddd", alignItems:"center", justifyContent:"center", marginTop: 2 },
  avatarText: { fontSize: 12, fontWeight: "700", color:"#555" },
  bold: { fontWeight: "700" },
  sendRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: { flex: 1, height: 44, borderRadius: 12, borderWidth: 1, borderColor: "#eee", backgroundColor:"#fff", paddingHorizontal: 12 },
  btn: { backgroundColor: "#6d28d9", paddingHorizontal: 14, height: 44, borderRadius: 12, alignItems:"center", justifyContent:"center", marginLeft: 8 },
  btnText: { color: "#fff", fontWeight: "700" }
});
