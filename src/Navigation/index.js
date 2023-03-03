import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../Screens/Welcome"
import { Regions } from "../Screens/Regions";
import { Customers } from "../Screens/Customers";
import { EditScreen } from "../Screens/Customers/Edit";
import { CreateScreen } from "../Screens/Customers/Create";
import { ContactCustomerScreen } from "../Screens/Customers/ContactCustomer";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="ListRegions" component={Regions}/>
        <Stack.Screen name="ListCustomers" component={Customers}/>
        <Stack.Screen name="EditCustomer" component={EditScreen}/>
        <Stack.Screen name="CreateCustomer" component={CreateScreen}/>
        <Stack.Screen name="ContactCustomer" component={ContactCustomerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
