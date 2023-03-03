import { useEffect, useRef } from "react";
import { Text, View, Animated } from "react-native";
import { CustomButton as Button } from "../../Components/Button";
import { style } from "./styles";
import { useDispatch } from "react-redux";
import * as actions from "../../features/customers/reducers";
import { regions } from "../../Utilities/helpers";

export const Regions = ({ navigation }) => {
  const genStyles = style();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCustomers());
  }, []);

  return (
    <View style={genStyles.container}>
      <Button
        text={"Add customer"}
        onPress={() => navigation.navigate("CreateCustomer")}
      />
      <Text style={genStyles.text}>List of Regions</Text>
      <Text>Select a Region</Text>
      {regions.map((region) => (
        <Button
          text={region}
          key={region}
          onPress={() => navigation.navigate("ListCustomers", { region })}
        />
      ))}
    </View>
  );
};
