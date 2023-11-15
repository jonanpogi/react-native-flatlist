import React from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import { Button } from "react-native"
import { useNavigation } from "@react-navigation/native";

const SecondaryScreen = () => {
  const navigation = useNavigation()

  const goToMainScreen = () => {
    navigation.navigate("MainScreen" as never)
  }

  return <AppSafeAreaView>
    <Button title="Go to Main Screen" onPress={goToMainScreen} />
  </AppSafeAreaView>
}

export default SecondaryScreen