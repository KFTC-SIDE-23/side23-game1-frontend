import React, { useState } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

// import { HelloWave } from "@/components/HelloWave";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
import ProfileCard from "@/components/ProfileCard";

const GameStartScreen = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <>
      {/* 도움말 모달
      <Modal transparent={true} visible={helpVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>도움말 모달(임시)</Text>
            <TouchableOpacity onPress={() => setHelpVisible(false)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <View style={styles.container}>
        {/* 프로필 카드 */}
        <View style={styles.profileContainer}>
          <ProfileCard profileImage={null} profileText="Guest User" />
        </View>

        {/* 도움말 버튼 */}
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            console.log("도움말 버튼 클릭됨");
            if (!helpVisible) {
              setHelpVisible(true);
            }
          }}
        >
          <Text style={styles.helpText}>?</Text>
        </TouchableOpacity>

        {/* 로고 */}
        <Image
          source={require("../assets/images/KFTCSide23-logo.png")}
          style={styles.logo}
        />

        {/* 하단 버튼 영역 */}
        <View style={styles.buttonContainer}>
          <Text>버튼 영역(임시)</Text>
        </View>
      </View>
    </>
  );
};

export default GameStartScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#1F225F",
  },
  profileContainer: {
    position: "absolute",
    top: width * 0.02,
    left: height * 0.02,
  },
  helpButton: {
    position: "absolute",
    top: width * 0.02,
    right: height * 0.04,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  helpText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    position: "absolute",
    width: height * 0.5,
    height: width * 0.3,
    resizeMode: "contain",
    top: height * 0.1,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: height * 0.1,
  },
  modalBackground: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },
});

// export default function HomeScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.mainContainer}>
//       <ProfileCard profileImage={null} profileText="Guest User" />
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome! KFTCSide23</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Main Page</ThemedText>
//       </ThemedView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 8,
//   },
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
// });
