import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import LogOutIconButton from '@/presentation/theme/components/LogOutIconButton';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';


const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === 'checking') {
    console.log('Checking authentication status...');
    console.log('status:', status);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === 'unauthenticated') {
    console.log('User is unauthenticated, redirecting to login...');
     console.log('status:', status);
    // Guardar la ruta del usuario
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        contentStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: 'Productos',
          headerLeft:() => <LogOutIconButton />,
         
        }}
      />

       <Stack.Screen
        name="product/[id]"
        options={{
          title: 'Producto',
          
         
        }}
      />
    </Stack>

    

    
  );
};
export default CheckAuthenticationLayout;