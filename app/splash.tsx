import { useUser } from "@/context/UserContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";

const SplashScreen = () => {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
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
        router.replace("/");
      } catch (err) {
        console.log("초기화 실패 : ", err);
      }
    };

    init();
  }, []);
  return (
    <>
      <Text style={{ color: "white" }}>SplashScreen</Text>
    </>
  );
};

export default SplashScreen;
