import PermissionCheckerProvider from '@/presentation/provider/PermissionCheckerProvider';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';



export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     <PermissionCheckerProvider>
       <Stack
           screenOptions={{ headerShown: false }}
      >
   

          <Stack.Screen name="loading/index" options={{ animation: 'fade' }} />
        <Stack.Screen name="map/index" options={{ animation: 'none' }} />
        <Stack.Screen name="permision/index" options={{ animation: 'fade' }} />
      </Stack>
     </PermissionCheckerProvider>
    </ThemeProvider>
        </GestureHandlerRootView>
  );
}
