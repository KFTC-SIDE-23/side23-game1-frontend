import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  LayoutRectangle,
} from "react-native";
import Button from "./Button";
import { useRouter } from "expo-router";

type RoutePaths = "/create-room" | "/join-room";

interface DropdownItem {
  label: string; // 드롭다운 항목의 레이블
  route?: RoutePaths; // 드롭다운 항목 경로
  onPress?: () => void;
}

interface DropdownButtonProps {
  title: string; // 버튼의 제목
  data: DropdownItem[]; // 드롭다운 항목 데이터
  buttonStyle?: ViewStyle; // 버튼 스타일
  textStyle?: TextStyle; // 버튼 텍스트 스타일
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  title,
  data,
  buttonStyle,
  textStyle,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [buttonLayout, setButtonLayout] = useState<LayoutRectangle | null>(
    null
  );
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const measureButton = (event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setButtonLayout({ x, y, width, height });
  };
  const handleSelect = (item: DropdownItem) => {
    if (item.onPress) {
      item.onPress();
    } else if (item.route) {
      router.push(item.route as never);
    } else {
    }
  };

  return (
    <View>
      <View onLayout={measureButton} style={styles.container}>
        <Button
          title={title}
          buttonStyle={buttonStyle}
          textStyle={textStyle}
          onPress={toggleMenu}
        ></Button>
        {isOpen && buttonLayout && (
          <View
            style={[
              styles.dropdownContainer,
              {
                position: "absolute",
                top: buttonLayout.y + buttonLayout.height,
                left: buttonLayout.x,
                width: buttonLayout.width,
              },
            ]}
          >
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    handleSelect(item);
                  }}
                >
                  <Text style={styles.dropdownText}>{item.label}</Text>
                </TouchableOpacity>
                {index !== data.length - 1 && <View style={styles.separator} />}
              </React.Fragment>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  dropdownContainer: {
    backgroundColor: "#4B4B82",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    color: "white",
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#fff",
    marginVertical: 2,
  },
});

export default DropdownButton;
