
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UploadButton({ onPress }) {
  return (
    <TouchableOpacity style={s.fab} onPress={onPress}>
      <Ionicons name="add" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  fab: { position: "absolute", right: 18, bottom: 28, width: 56, height: 56, borderRadius: 28, backgroundColor: "#000", alignItems: "center", justifyContent: "center", elevation: 6 }
});
