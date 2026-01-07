import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme.web';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { DarkTheme, DefaultTheme, ThemeProvider, } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
   const [fontsLoaded, fontError] = useFonts({
    'Kanit-Regular': require('@/assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Bold': require('@/assets/fonts/Kanit-Bold.ttf'),
    'Kanit-Thin': require('@/assets/fonts/Kanit-Thin.ttf'),
  });
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

    useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
   <GestureHandlerRootView style={{ flex: 1 , backgroundColor: backgroundColor }}>

     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
   </GestureHandlerRootView>
  );
}
