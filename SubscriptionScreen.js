
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SubscriptionScreen() {
  const [active, setActive] = useState(null);

  return (
    <SafeAreaView style={s.screen}>
      <Text style={[s.title, { margin:16 }]}>Подписки</Text>
      <View style={{ paddingHorizontal:16 }}>
        <Card title="🎬 Полный доступ" price="399₽/мес" active={active === "premium_399"} onPress={() => setActive("premium_399")} />
        <Card title="🎤 Только озвучка" price="50₽/мес" active={active === "voice_50"} onPress={() => setActive("voice_50")} />
      </View>
      {active && <Text style={{ textAlign:"center", marginTop:12, color:"#0a0" }}>✅ Активна (UI). Billing подключим позже</Text>}
    </SafeAreaView>
  );
}

function Card({ title, price, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[s.cardRow, active && { borderColor: "#22c55e", borderWidth: 2 }]}>
      <View><Text style={s.cardTitle}>{title}</Text><Text style={s.cardPrice}>{price}</Text></View>
      <View style={[s.subButton, active && { backgroundColor: "#22c55e" }]}><Text style={s.subButtonText}>{active ? "Активна" : "Оформить"}</Text></View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  screen:{ flex:1, backgroundColor:"#f6f3ff" },
  title:{ fontSize:20, fontWeight:"700" },
  cardRow:{ backgroundColor:"#fff", padding:16, borderRadius:16, marginBottom:12, flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderColor:"#ffffff70", borderWidth:1 },
  cardTitle:{ fontSize:18, fontWeight:"700" },
  cardPrice:{ fontSize:15, color:"#555", marginTop:4 },
  subButton:{ backgroundColor:"#6d28d9", borderRadius:999, paddingVertical:10, paddingHorizontal:16 },
  subButtonText:{ color:"#fff", fontWeight:"700" }
});
