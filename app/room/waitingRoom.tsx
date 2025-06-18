import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 예시 유저 데이터
const userProfile = {
  name: "홍길동",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

const waitingUsers = [
  {
    id: "1",
    name: "김철수",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "2",
    name: "이영희",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "3",
    name: "박민수",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const WaitingRoomScreen = () => {
  const router = useRouter();

  const handleStartGame = () => {
    router.push("/room/gameRoom");
  };

  const renderUser = ({ item }: any) => (
    <View style={styles.userItem}>
      <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
      <Text style={styles.userName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 프로필 카드 */}
      <View style={styles.profileContainer}>
        <ProfileCard profileImage={null} profileText="Guest User" />
      </View>
      {/* 대기 유저 목록 (가운데 정렬) */}
      <View style={styles.waitingListContainer}>
        <Text style={styles.waitingTitle}>대기 중인 유저</Text>
        <FlatList
          data={waitingUsers}
          renderItem={renderUser}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
      {/* 게임 시작 버튼 */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.startButtonText}>게임 시작</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  profileAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  waitingListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  waitingTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  listContent: {
    alignItems: "center",
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
  startButton: {
    backgroundColor: "#4e9cff",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 36,
    marginBottom: 56,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WaitingRoomScreen;
