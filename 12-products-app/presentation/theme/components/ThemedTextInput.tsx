import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

interface Props extends TextInputProps{

  icon?: keyof typeof  Ionicons.glyphMap;



}

const ThemedTextInput = ({icon, ...rest}: Props) => {

  const primaryColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  return (
    <View style={{...styles.border, borderColor: isFocused ? primaryColor : textColor}} onTouchStart={()=> inputRef.current?.focus()} >
   
      {icon && <Ionicons name={icon} size={24} color={textColor} style={{marginRight: 10}} />}



      <TextInput 
      ref={inputRef}
      {...rest} 
      placeholderTextColor="#5c5c5c"
      onFocus={()=> setIsFocused(true)}
      onBlur={()=> setIsFocused(false)}
      style={{flex:1, color: textColor, marginRight:10}}
      ></TextInput>
    </View>

    

  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
  border:{
    borderWidth:1,
    borderRadius:5,
    padding:5,
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',

  }
})