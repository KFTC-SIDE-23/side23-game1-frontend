import { useUser } from "@/context/UserContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    console.log("Splash mounted");
    const init = async () => {
      try {
        const uidRes = await fetch(
          "https://side23-game1-backend.onrender.com/api/auth/guest",
          { method: "POST" }
        );

        const uid = await uidRes.json();

        const profileRes = await fetch(
          `https://side23-game1-backend.onrender.com/api/user/${uid}`
        );

        const { name, avatar } = await profileRes.json();

        setUser({ uid, name: name, avatar: avatar });

        console.log(uid, name, avatar);
        requestAnimationFrame(() => {
          router.replace("/");
        });
      } catch (err) {
        console.log("초기화 실패 : ", err);
      }
    };

    init();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/splash-logo.png")}
          style={styles.logo}
        />
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F225F",
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
