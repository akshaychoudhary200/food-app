import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";

const navigator = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navigator.Navigator initialRouteName="Search">
        <navigator.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search Screen" }}
        />
        <navigator.Screen name="Details" component={DetailsScreen} />
      </navigator.Navigator>
    </NavigationContainer>
  );
}
