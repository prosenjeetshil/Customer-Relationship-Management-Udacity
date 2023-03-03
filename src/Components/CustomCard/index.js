import { Text, TouchableOpacity, View } from "react-native";
import { cardstyles } from "./styles";

export const CustomCard = ({ item, onPress }) => {
  const styles = cardstyles();
  const { id, firstName, lastName, active, region } = item;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>ID: {id}</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Active? {active ? "active" : "inactive"}</Text>
      <Text>Region: {region}</Text>
    </TouchableOpacity>
  );
};
