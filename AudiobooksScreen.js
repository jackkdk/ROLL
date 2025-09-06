
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
export default function AudiobooksScreen() {
  return (
    <SafeAreaView style={s.center}>
      <Text style={s.title}>Аудиокниги (скоро)</Text>
      <Text style={s.muted}>Каталог и плеер добавим позже</Text>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  center: { flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#f6f3ff" },
  title: { fontSize: 20, fontWeight: "700" },
  muted: { color: "#666", marginTop: 8 }
});
