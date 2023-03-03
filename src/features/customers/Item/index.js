import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Item = ({ title, onPress, backgroundColor, textColor, value }) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor }]}
      onPress={onPress}
      backgroundColor={backgroundColor}
      value={value}
    >
      <Text style={[styles.itemText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Item };
