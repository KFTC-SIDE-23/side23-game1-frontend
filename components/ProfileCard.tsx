import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ProfileCardProps {
  profileImage?: string | ImageSourcePropType | null;
  profileText?: string;
}

// 샘플 이미지들 - 추후 서버에서 받아오는 값으로 교체
// const profileImages = [
//   require("../assets/images/profiles/profile1.png"),
//   require("../assets/images/profiles/profile2.png"),
//   require("../assets/images/profiles/profile3.png"),
//   require("../assets/images/profiles/profile4.png"),
// ];

// 임시 - profileImage는 숫자로 받아오는 인덱스값
const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  profileText = "Unknown User",
}) => {
  // const profileIndex = profileImage !== null ? profileImage : 0;
  const imageSource =
    typeof profileImage === "string"
      ? { uri: profileImage }
      : profileImage || undefined;

  console.log(imageSource);
  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Text style={styles.profileText}>{profileText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 10,
    left: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  profileText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#fff",
  },
});

export default ProfileCard;
