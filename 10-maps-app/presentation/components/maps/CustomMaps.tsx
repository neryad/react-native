import { LatLng } from '@/infrastructure/interfaces/lat-lng';
import { useLocationStore } from '@/presentation/store/userLocation';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import FAB from '../shared/FAB';

interface Props extends ViewProps {
    initialLocation: LatLng
showUserLocation?: boolean;

}
const CustomMaps = ({ initialLocation, showUserLocation = true, ...rest } :Props) => {
    const mapRef = useRef<MapView>(null);
    const [isFallowingUser, setIsFallowingUser] = useState(true);
     const [isShowingPolyline, setIsShowingPolyline] = useState(true);

const {watchLocation, clearWatchLocation, lastKnownLocation, getLocation, userLocationList} = useLocationStore();


    useEffect(() => {
        watchLocation();
        return () =>{
            clearWatchLocation();
        }
    }, [])



      useEffect(() => {
      if(lastKnownLocation && isFallowingUser) {
        console.log('Moving camera to:', lastKnownLocation);
        moveCameraToLocation(lastKnownLocation);
      }
    }, [lastKnownLocation, isFallowingUser]);


    

    const moveCameraToLocation = (latLng: LatLng) => {
        if(!mapRef.current) return;
        mapRef.current.animateCamera({
            center: latLng
        })
    }

    const moveToCurrentLocation = async () => {

        if(!lastKnownLocation){
            moveCameraToLocation(initialLocation);
        } else {
            moveCameraToLocation(lastKnownLocation);
        }

        const location = await getLocation();
        console.log('Current location:', location);
        if(!location) return;
        moveCameraToLocation(location);

        // if(lastKnownLocation) {
        //     setIsFallowingUser(true);
        //     moveCameraToLocation(lastKnownLocation);
        // }



    }

  return (



    <View {...rest} >
      <MapView style={styles.map} 
      ref={mapRef}
      onTouchStart={() => setIsFallowingUser(false)}
     showsUserLocation={showUserLocation}
      initialRegion={{
    latitude: initialLocation.latitude,
    longitude: initialLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    {isShowingPolyline && (
            <Polyline coordinates={userLocationList} strokeColor={'black'} strokeWidth={5}/>
    )}

 
        </MapView>
  <FAB iconName='compass-outline' onPress={moveToCurrentLocation} style={{ bottom: 30, right: 20 }} />


      <FAB iconName={isFallowingUser ? 'walk-outline' : 'accessibility-outline'} onPress={() => setIsFallowingUser(!isFallowingUser)} style={{ bottom: 90, right: 20 }} />

          <FAB iconName={isFallowingUser ? 'eye-outline' : 'eye-off-outline'} onPress={() => setIsShowingPolyline(!isShowingPolyline)} style={{ bottom: 170, right: 20 }} />


    </View>
  )
}

export default CustomMaps


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