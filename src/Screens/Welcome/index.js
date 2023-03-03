import { Text, View } from "react-native";
import { CustomButton } from "../../Components/Button";
import { style } from "./styles";
import { useDispatch } from "react-redux";
import { clearStorage } from "../../features/customers/reducers";

export const Welcome = ({ navigation }) => {
  const styles = style();
  const dispatch = useDispatch();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleClearStorage = () => {
    dispatch(clearStorage());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Customer Manager Plus</Text>
      <CustomButton
        text="Click to continue"
        onPress={() => handleNavigation("ListRegions")}
      />
      <CustomButton
        text="Notifications"
        onPress={() => handleNavigation("ContactCustomer")}
      />
      <CustomButton text="Clear Storage" onPress={handleClearStorage} />
    </View>
  );
};
