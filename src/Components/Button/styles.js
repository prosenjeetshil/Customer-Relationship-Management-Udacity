import { StyleSheet } from "react-native";

export const buttonstyles = ({ disabled }) => {
  return StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: disabled ? "#CCC" : "#3E54AC",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      opacity: disabled ? 0.5 : 1,
    },
    buttonLabel: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: "bold",
    },
  });
};
