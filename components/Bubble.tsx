import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BubbleProps = {
  text?: string;
  imageSource?: ImageSourcePropType;
  width?: number;
  height?: number;
  isLeft?: boolean;
};

const Bubble: React.FC<BubbleProps> = ({
  text,
  imageSource,
  width = 200,
  height = 100,
  isLeft = true,
}) => {
  return (
    <View
      style={[styles.wrapper, isLeft ? styles.leftAlign : styles.rightAlign]}
    >
      <View style={[styles.bubbleContainer, { width, height }]}>
        {text && <Text style={styles.bubbleText}>{text}</Text>}
        {imageSource && (
          <Image source={imageSource} style={styles.bubbleImage} />
        )}
        {isLeft && <View style={[styles.bubbleTail, styles.leftTail]} />}
        {!isLeft && <View style={[styles.bubbleTail, styles.rightTail]} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 50,
  },
  leftAlign: {
    alignSelf: "flex-start",
  },
  rightAlign: {
    alignSelf: "flex-end",
  },
  bubbleContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    maxWidth: 250,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    position: "relative",
  },
  bubbleText: {
    fontSize: 16,
    color: "#000",
  },
  bubbleImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
    marginTop: 5,
  },
  bubbleTail: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
  },
  leftTail: {
    left: -20,
    top: "25%",
    transform: [{ translateY: -10 }],
    borderTopWidth: 15,
    borderBottomWidth: 15,
    borderRightWidth: 20,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "white",
  },
  rightTail: {
    right: -20,
    top: "25%",
    transform: [{ translateY: -10 }],
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 20,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "white",
  },
});

export default Bubble;
