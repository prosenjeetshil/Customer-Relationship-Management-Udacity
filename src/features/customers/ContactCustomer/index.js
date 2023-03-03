import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import React, { useEffect } from "react";
import { Keyboard, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CustomButton } from "../../../Components/Button";
import { style } from "./styles";

const initialCustomer = [
  {
    firstName: "Rayn",
    lastName: "Goshling",
    activity: "active",
    region: "South East",
  }
];

const onSubmit = (seconds, data) => {
  const customers = data.length > 0 ? data : initialCustomer;

  const randomCustomer =
    customers[Math.floor(Math.random() * customers.length)];

  const CustomerFullName =
    randomCustomer.firstName + " " + randomCustomer.lastName;

  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: `Its time for a customer follow up :  ${CustomerFullName}`,
      body: "Open the app to read more about your customer details!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: seconds,
    },
  };

  Notifications.scheduleNotificationAsync(schedulingOptions)
  .then(() => console.log("Displayed push notification successfully!"))
		.catch((error) => {
			console.log(error.toString());
		});
};

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (Device.isDevice && status === "granted") {
    console.log("Notification permissions granted.");
  }
};

export const ContactCustomer = () => {
  const styles = style();
  const customers = useSelector((state) => state.customer.list.customers);
  console.log(customers);
  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification); // mark notification as received
    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Press the button to schedule your reminder to contact customer!
      </Text>
      <CustomButton onPress={() => onSubmit(5, customers)} text="Schedule" />
    </View>
  );
};