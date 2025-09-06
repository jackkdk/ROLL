
import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Video from "react-native-video";

export default function VideoPlayer({ uri, shouldPlay=false }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(!shouldPlay);

  return (
    <View style={s.box}>
      <Video
        ref={ref}
        source={{ uri }}
        style={s.video}
        resizeMode="contain"
        paused={paused}
        controls
      />
      <TouchableOpacity style={s.playBtn} onPress={() => setPaused(p => !p)}>
        <Text style={s.playText}>{paused ? "Play" : "Pause"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  box: { width: "100%", height: 220, backgroundColor: "#000" },
  video: { width: "100%", height: "100%" },
  playBtn: { position: "absolute", right: 10, bottom: 10, backgroundColor: "#00000088", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  playText: { color: "#fff", fontWeight: "700" }
});
