import { StyleSheet, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import DropdownButton from "@/components/DropdownButton";
import ProfileCard from "@/components/ProfileCard";
import Button from "@/components/Button";
import { Link } from "expo-router";

export default function HomeScreen() {
  const sampleData = [
    { label: "친구와 함께", value: "1" },
    { label: "방 만들기", value: "2" },
    { label: "참여하기", value: "3" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ProfileCard profileImage={null} profileText="Guest User" />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! KFTCSide23</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Main Page</ThemedText>
      </ThemedView>
      <Link href="/randomGame">
        <Button title="랜덤 게임" />
      </Link>
      <DropdownButton data={sampleData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
