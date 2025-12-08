import { ThemedText } from '@/components/themed-text'
import { usePushNotification } from '@/hooks/usePushNotification'
import React from 'react'
import { FlatList, View } from 'react-native'

const PushApp = () => {

  const { expoPushToken, notifications} = usePushNotification();
  return (
    <View style={{ marginHorizontal: 10, marginTop: 5, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ThemedText>Token: {expoPushToken}</ThemedText>
        <ThemedText style={{ marginTop: 10, fontWeight: 'bold', fontSize: 25 }}>Notificaciones</ThemedText>

        <FlatList data={notifications} keyExtractor={item => item.request.identifier} renderItem={({ item }) => (
          <View>
            <ThemedText>{item.request.content.title}</ThemedText>
              <ThemedText> {item.request.content.body}</ThemedText>
              <ThemedText>{JSON.stringify(item.request.content.data, null, 2)}</ThemedText>
          </View>
        )} 
        ItemSeparatorComponent={()=> (<View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 5 }} />)}
        
        /> 
    </View>
  )
}

export default PushApp