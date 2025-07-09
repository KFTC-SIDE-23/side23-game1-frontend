// app/create.tsx
import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function CreateRoomScreen() {
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreate = () => {
    setRoomId("");
    setPassword("");
    router.push("/room/waitingRoom");
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      {/* 프로필 카드 */}
      <View style={styles.profileContainer}>
        <ProfileCard profileImage={null} profileText="Guest User" />
      </View>

      {/* 중앙 영역 */}
      <View style={styles.modalBox}>
        <Text style={styles.modalTitle}>방 만들기</Text>

        <TextInput
          style={styles.input}
          placeholder="방 번호는 자동 생성됩니다."
          placeholderTextColor={"#999"}
          value={roomId}
          onChangeText={setRoomId}
          editable={false} // 방 번호는 자동 생성되므로 사용자가 입력할 필요 없음
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          keyboardType="number-pad"
        />

        <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
          <Text style={styles.createButtonText}>만들기</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F225F",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  modalBox: {
    width: 320,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.11,
    shadowRadius: 9,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 22,
  },
  input: {
    width: "100%",
    height: 46,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  createButton: {
    marginTop: 8,
    width: "100%",
    height: 46,
    backgroundColor: "#3777f0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
