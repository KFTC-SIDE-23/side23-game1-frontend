import DrawingPannel from "@/components/DrawingPannel";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GameRoomScreen() {
  const users = [
    "수박_102256",
    "키위_102256",
    "딸기_253421",
    "바나나_102256",
    "레몬_12356",
  ];

  return (
    <View style={styles.container}>
      {/* 좌측 유저 리스트 */}
      <View style={styles.sidebar}>
        {users.map((name, idx) => (
          <View key={idx} style={styles.userRow}>
            <View style={styles.profileCircle} />
            <Text style={styles.userText}>{name}</Text>
          </View>
        ))}
      </View>

      {/* 중앙 그림판 */}
      <View style={styles.canvasContainer}>
        <DrawingPannel enableDrawing={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1f1f61",
  },
  sidebar: {
    width: 100,
    backgroundColor: "#1f1f61",
    paddingTop: 50,
    paddingHorizontal: 8,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  profileCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "lightgray",
    marginRight: 6,
  },
  userText: {
    color: "white",
    fontSize: 12,
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: "#1f1f61",
    justifyContent: "center",
    alignItems: "center",
  },
});
