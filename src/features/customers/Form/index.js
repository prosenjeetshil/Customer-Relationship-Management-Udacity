import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
import { CustomButton } from "../../../Components/Button";
import { useUpdateFields } from "../hooks";
import { regions } from "../../../Utilities/helpers";
import { activitystatus } from "../../../Utilities/helpers";
import { Item } from "../Item";

export const Form = ({ handleSubmit, status, customerID }) => {
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerID);
  const { firstName, lastName, activity, region } = fields;
  const areFieldsFilled = Object.values(fields).every((field) => field);
  const onSubmit = () => {
    if (areFieldsFilled) {
      handleSubmit();
      navigate("ListRegions");
    } else {
      console.log(status, "please fill all mandatory fields");
    }
  };

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.title}>Create new customer</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFormField("firstName")}
          placeholder="First Name"
          value={firstName}
          key="firstName"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Last Name"
          onChangeText={setFormField("lastName")}
          key="lastName"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Active?</Text>
        <FlatList
          data={activitystatus}
          renderItem={({ item }) => (
            <Item
              title={item}
              value={item}
              onPress={() => setFormField("activity")(item)}
              backgroundColor={item === activity ? "#655DBB" : "#BFACE2"}
              textColor={item === activity ? "white" : "black"}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Region:</Text>
        <FlatList
          data={regions}
          renderItem={({ item }) => (
            <Item
              title={item}
              onPress={() => setFormField("region")(item)}
              backgroundColor={item === region ? "#655DBB" : "#BFACE2"}
              textColor={item === region ? "white" : "black"}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <CustomButton
        text={customerID ? "Save Changes" : "Add New Customer"}
        onPress={onSubmit}
        disabled={!areFieldsFilled}
      />
    </View>
  );
};
