import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { CustomersList } from "../../features/customers/CustomerList"
 
export const Customers = () => (
  <SafeAreaView>
    <ScrollView>
      <CustomersList />
    </ScrollView>
  </SafeAreaView>
);