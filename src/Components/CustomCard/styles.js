import { StyleSheet } from "react-native";

export const cardstyles = () => {
  return StyleSheet.create({
    card: {
      backgroundColor: "#FFF",
      borderRadius: 8,
      padding: 16,
      margin: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
};
