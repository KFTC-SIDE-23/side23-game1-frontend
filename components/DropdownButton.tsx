import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownButtonProps {
  data: DropdownItem[];
  placeholder: string;
}

const DropdownButton = ({ data, placeholder }: DropdownButtonProps) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.wrapper}>
      <View style={styles.shadowWrapper}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onChange={(item: DropdownItem) => {
            if (item.value !== value) {
              setValue(item.value);
              console.log(item.value);
            }
          }}
        />
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
  dropdown: {
    width: 200,
    height: 40,
    paddingVertical: 10,
    borderColor: "white",
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 20,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DropdownButton;
