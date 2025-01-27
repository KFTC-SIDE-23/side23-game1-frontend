import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Default Page</ThemedText>
      </ThemedView>
      <ThemedText>나중에 구현 예정</ThemedText>
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
    gap: 8,
  },
});
