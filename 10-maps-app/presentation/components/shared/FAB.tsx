import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';


interface Props   {
    onPress:() => void;
    style?: StyleProp<ViewStyle>;
    iconName: keyof typeof Ionicons.glyphMap;
}


const FAB = ({ onPress, style, iconName }:Props) => {
  return (
    <View>
      <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <Ionicons name={iconName || "add"} color="white" size={33} />
      </TouchableOpacity>  
    </View>
  )
}

export default FAB

const styles = StyleSheet.create({
    btn:{
        zIndex: 999,
        position: 'absolute',
      
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        
        alignItems: 'center',
      
            shadowOpacity: 0.3,
        shadowOffset:{
            width: 0.27,
            height: 4.5,  
    },
    elevation: 6,
    }

})