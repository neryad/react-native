import CustomMaps from '@/presentation/components/maps/CustomMaps'
import { useLocationStore } from '@/presentation/store/userLocation'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

const MapScreen = () => {

 const { lastKnownLocation, getLocation} = useLocationStore();

 useEffect(() => {

    if(lastKnownLocation === null){
        getLocation();
    }


  }, []);
  

  if(lastKnownLocation === null){
    return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      
        <ActivityIndicator  />
      
       </View>
  }




  return (
    <View >

          <CustomMaps initialLocation={lastKnownLocation} /> 
  
    </View>
  )
}

export default MapScreen