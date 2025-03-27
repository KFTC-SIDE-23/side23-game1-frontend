import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface DropdownItem {
  label: string;
  value: string;
}

const DropdownButton = ({ data }: { data: DropdownItem[] }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={value}
        onChange={(item: DropdownItem) => {
          if (item.value !== value) {
            setValue(item.value);
            console.log(item.value);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    width: 200,
    height: 40,
    borderColor: "gray",
    backgroundColor: "gray",
    color: "white",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
  },
});

export default DropdownButton;
