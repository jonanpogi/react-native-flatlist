import React from "react";
import { SafeAreaView, StyleSheet } from "react-native"
import Constant from "expo-constants"

type AppViewProps = {
  children: React.ReactNode
}

const AppSafeAreaView = (props: AppViewProps) => {
  return <SafeAreaView style={styles.container}>
    {props.children}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight
  }
})

export default AppSafeAreaView