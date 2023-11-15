import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SecondaryScreen from "../screens/SecondaryScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator()

const AppNavigator = () => {
  return <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="MainScreen" component={MainScreen} />
    <Stack.Screen name="SecondaryScreen" component={SecondaryScreen} />
  </Stack.Navigator>
}

export default AppNavigator