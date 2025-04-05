import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, buttonStyle, textStyle }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.shadowWrapper}>
        <TouchableOpacity style={[styles.button, buttonStyle]}>
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.shadowLayer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
  },
  shadowWrapper: {
    position: "relative",
  },
  shadowLayer: {
    position: "absolute",
    backgroundColor: "#dfe3fa",
    top: 5,
    left: 0,
    right: 0,
    bottom: -5,
    borderRadius: 999,
    zIndex: 1,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
});

export default Button;
