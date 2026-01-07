import { ThemedText } from '@/presentation/theme/components/themed-text';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import ThemeLink from '@/presentation/theme/components/ThemeLink';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const RegisterScreen
 = () => {
  const {height, width} =  useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');
  return (
   <KeyboardAvoidingView style={{ flex: 1}} behavior="padding"> 

    <ScrollView style={{ paddingHorizontal:40, backgroundColor:backgroundColor }} >
      <View style={{ paddingTop: height * 0.35, paddingHorizontal:20,  }}>
 <ThemedText type='title'>Crear cuenta</ThemedText>
 <ThemedText style={{color:'grey'}} >Por favor crea una cuenta para continuar</ThemedText>
      </View>


      <View style={{ marginTop:20}}>

         <ThemedTextInput placeholder='Nombre completo'  
      autoCapitalize='words' 
      icon="person-outline"></ThemedTextInput>

      <ThemedTextInput placeholder='Correo Electrónico' keyboardType='email-address' 
      autoCapitalize='none' 
      icon="mail-outline"></ThemedTextInput>

       <ThemedTextInput placeholder='Contraseña' secureTextEntry autoCapitalize='none' icon="lock-closed-outline"></ThemedTextInput>
      </View>

      <View style={{ marginTop: 10 }}></View>
      
    <ThemedButton icon='arrow-forward-outline'  >Crear cuenta</ThemedButton>

      <View style={{ marginTop: 50 }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

    <ThemedText>¿Tienes cuenta?</ThemedText>
    <ThemeLink href='/auth/login' style={{marginHorizontal:5}}>Ingresar</ThemeLink>

      </View>
     
    </ScrollView>




   </KeyboardAvoidingView>
  )
}

export default RegisterScreen




