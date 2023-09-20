import { View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants/colors';

const Welcome = () => {
  return (
    <LinearGradient colors={[COLORS.blackground, COLORS.title]} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.background }}>
        {/* Nội dung khác trong thành phần */}
      </View>
    </LinearGradient>
  );
};

export default Welcome;