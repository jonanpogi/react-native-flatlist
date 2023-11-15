import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, FlatList, Text } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import Pokemon from "../components/Pokemon";

const limit = 20

const MainScreen = () => {
  const [offset, setOffSet] = useState(0)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])
  const navigation = useNavigation()
  const cancelToken = axios.CancelToken.source()

  const fetch = async () => {
    try {
      setLoading(true)

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`, { cancelToken: cancelToken.token })

      if (!data) throw new Error("No data have been returned.");

      setData(prevData => [...prevData, ...data.results])
      setOffSet(prevOffSet => prevOffSet + 20)

    } catch (error: any) {
      Alert.alert("Something went wrong", error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // when component mounts
    fetch()

    // whenever unmount
    return () => {
      if (cancelToken) {
        cancelToken.cancel()
      }
    }
  }, [])

  const goToSecondaryScreen = () => {
    navigation.navigate("SecondaryScreen" as never)
  }

  return <AppSafeAreaView>
    <Button title="Go to Secondary Screen" onPress={goToSecondaryScreen} />
    <FlatList
      data={data}
      renderItem={({ item }) => <Pokemon url={item.url} />}
      keyExtractor={(_, index) => index.toString()}
      onEndReachedThreshold={0}
      onEndReached={() => fetch()}
    />
    {loading && <ActivityIndicator size={"large"} />}
  </AppSafeAreaView>
}

export default MainScreen