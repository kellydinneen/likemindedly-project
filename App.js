import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic
} from '@expo-google-fonts/noto-sans';

import Card from './Card';

const App = () => {

  let [fontsLoaded] = useFonts({
      NotoSans_400Regular,
      NotoSans_400Regular_Italic,
      NotoSans_700Bold,
      NotoSans_700Bold_Italic,
  });

  return (
    <>
      {!fontsLoaded && <AppLoading />}
      {fontsLoaded && <View style={{backgroundColor: '#E5E5E5', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Card/>
      </View>}
    </>
  )
};

export default App;
