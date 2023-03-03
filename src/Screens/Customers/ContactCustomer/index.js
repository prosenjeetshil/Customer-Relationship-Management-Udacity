import { SafeAreaView, ScrollView } from "react-native";
import { ContactCustomer } from "../../../features/customers/ContactCustomer/index";

export const ContactCustomerScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ContactCustomer />
      </ScrollView>
    </SafeAreaView>
  );
};
