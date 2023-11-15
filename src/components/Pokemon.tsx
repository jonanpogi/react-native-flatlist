import React, { useEffect, useState } from "react";
import axios from "axios"
import { Image, View, Text, Alert } from "react-native"

type PokemonProps = {
  url: string
}

const Pokemon = ({ url }: PokemonProps) => {
  const [data, setData] = useState<any>({})
  const cancelToken = axios.CancelToken.source()

  const fetch = async () => {
    try {

      const { data } = await axios.get(url, { cancelToken: cancelToken.token })

      if (!data) throw new Error("No data have been returned.");

      setData(data)

    } catch (error: any) {
      Alert.alert("Something went wrong", error.message)
    }
  }

  useEffect(() => {
    fetch()
  }, [url])

  return <View>
    <Text>{data.name}</Text>
    <Image source={{ uri: data?.sprites?.front_default }} height={20} width={20} />
  </View>
}

export default Pokemon