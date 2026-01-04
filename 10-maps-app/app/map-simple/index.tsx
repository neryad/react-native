import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    <Marker
    coordinate={{
          latitude: 37.78825,
    longitude: -122.4324,
    
    }}
    title='hola'
    description='klok' />
        <Marker
    coordinate={{
          latitude: 38.78825,
    longitude: -122.4324,
    
    }}
    title='hola 2'
    description='klok 2' />
      </MapView>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
    width: '100%',
    height: '100%',
  }
});