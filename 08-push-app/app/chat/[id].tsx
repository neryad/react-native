import { ThemedText } from '@/components/themed-text'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const ChatIdScreen = () => {

    const {id} = useLocalSearchParams();
  return (
    <View>
      <ThemedText style={{ marginHorizontal: 10 }}>Chat Id Screen</ThemedText>
      <ThemedText style={{ marginBottom: 10, fontSize:25 }}>Chat Id :{id}</ThemedText>
    </View>
  )
}

export default ChatIdScreen