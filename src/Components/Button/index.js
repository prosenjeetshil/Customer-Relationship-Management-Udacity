import { Text, Pressable, View } from "react-native";
import { buttonstyles } from "./styles";

export const CustomButton = ({ text, 
  onPress, 
  disabled 
}) => {
  const styles = buttonstyles({ disabled: disabled });
  return (
    <View style={styles.buttonContainer}>
      <Pressable 
      onPress={onPress} 
      style={styles.button} 
      disabled={disabled}
      >
        <Text style={styles.buttonLabel}>{text}</Text>
      </Pressable>
    </View>
  );
};
