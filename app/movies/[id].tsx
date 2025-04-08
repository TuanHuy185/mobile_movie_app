import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const MovieDetail = () => {
  const { id } = useLocalSearchParams();
  
  return (
    <View>
      <Text>Movie Detail {id}</Text>
    </View>
  )
}

export default MovieDetail;