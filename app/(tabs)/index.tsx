import { Image, StyleSheet, Platform, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! KFTCSide23</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Main Page</ThemedText>
      </ThemedView>
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
