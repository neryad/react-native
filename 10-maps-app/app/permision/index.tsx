import ThemedPressable from '@/presentation/components/shared/theme-presable';
import { usePermissionStore } from '@/presentation/store/usePermissions';
import React from 'react';
import { Text, View } from 'react-native';

const PermissionScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionStore();


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <ThemedPressable onPress={requestLocationPermission}>
            Solicitar permiso de ubicación
        </ThemedPressable>
     

      <Text>Estado actual: {locationStatus}</Text>
    </View>
  )
}

export default PermissionScreen