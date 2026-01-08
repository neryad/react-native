import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

const LogOutIconButton = () => {

    const primaryColor = useThemeColor({}, 'primary');
    const {logout} = useAuthStore();
  return (
    <TouchableOpacity onPress={logout} style={{marginRight:8}}>
      <Ionicons name='log-out-outline' size={24} style={{color: primaryColor}}/>
    </TouchableOpacity>
  )
}

export default LogOutIconButton