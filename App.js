import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const App = () => {
  return (
    <View style={{backgroundColor: '#E5E5E5', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card/>
    </View>
  );
}

export default App;
