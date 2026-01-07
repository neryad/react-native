import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export class SecureStorageAdapter {

 
    static async setItem( key: string, value: string){



        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error("Error setting item in secure storage:", error);
            Alert.alert("Storage Error", "Failed to save data securely.");
        }
    } 
    static async getItem( key: string) { 

        try {
            const value = await SecureStore.getItemAsync(key);
            return value;
        } catch (error) {   
            console.error("Error getting item from secure storage:", error);
            Alert.alert("Storage Error", "Failed to retrieve data securely.");
            return null;
            
        }


    }

    static async deleteItem( key: string) {

        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error("Error deleting item from secure storage:", error);
            Alert.alert("Storage Error", "Failed to delete data securely.");    
        }
     }




}