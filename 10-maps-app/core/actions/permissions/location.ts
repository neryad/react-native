import { Alert, Linking } from 'react-native';
import { PermissionStatus } from '../../../infrastructure/interfaces/location';

import * as Location from 'expo-location';

export const requestLocationPermission = async():Promise<PermissionStatus> =>{




    const { status } = await Location.requestForegroundPermissionsAsync();

    if(status != 'granted'){

        //TODO:
        managePermissionRequest();
        return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;

}

export const checkLocationPermission = async() => {


    const { status } = await Location.getForegroundPermissionsAsync();


switch (status) {
    case 'granted':
        return PermissionStatus.GRANTED;
    case 'denied':
        return PermissionStatus.DENIED;

    default:
        return PermissionStatus.UNDETERMINED;
}


}

export const managePermissionRequest = async() => {

    Alert.alert(
        'Permiso de ubicación necesaria',
        'Para continuar, por favor habilita el permiso de ubicación en la configuración de la aplicación.',    
        [
            {
                text: 'Cancel',     
                style: 'cancel',
            },
            {
                text: 'Open Settings',
                onPress: () => {
                    Linking.openSettings();
                },
            },
        ],
        { cancelable: false }
    );




}