import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';

const Dropdown = () => {

  return (
    <View style={styles.dropdown}>
      <View style={styles.dropdownGroup}>
        <Image style={styles.icon} source={require('./assets/edit.png')}/>
        <Text>Rename</Text>
      </View>
      <View style={styles.dropdownGroup}>
        <Image style={styles.icon} source={require('./assets/copy.png')}/>
        <Text>Copy</Text>
      </View>
      <Text>Cancel Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    flex: 0.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownGroup: {
    flexDirection: 'row'
  },
  icon: {
    height: 25,
    resizeMode: 'contain'
  }
});

export default Dropdown;
