import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'


interface Props extends PressableProps{
    children:string
}

const ThemedPressable = ({children, ...rest}:Props) => {
  return (
 <Pressable style={styles.btnPrimary} {...rest} >

    <Text>{children}    </Text>
 </Pressable>
  )
}

export default ThemedPressable

const styles = StyleSheet.create({

    btnPrimary: {
        padding:20,
        backgroundColor:'blue',
        borderRadius:10,
        marginBottom:20
    }
});