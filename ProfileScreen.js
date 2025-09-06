
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
export default function ProfileScreen() {
  return (
    <SafeAreaView style={s.center}>
      <Text style={s.title}>Профиль</Text>
      <Text style={s.muted}>Войдите, чтобы сохранять в облако</Text>
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  center:{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#f6f3ff" },
  title:{ fontSize:20, fontWeight:"700" },
  muted:{ color:"#666", marginTop:8 }
});
