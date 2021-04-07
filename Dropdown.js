import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Dropdown = () => {

  return (
    <View style={styles.dropdown}>
      <View style={styles.dropdownGroup}>
        <Image style={styles.icon} source={require('./assets/edit.png')}/>
        <Text style={styles.text}>Rename</Text>
      </View>
      <View style={[{borderBottomColor: '#E8E8E8',
      borderStyle: 'solid',
      borderBottomWidth: 1}, styles.dropdownGroup]}>
        <Image style={styles.icon} source={require('./assets/copy.png')}/>
        <Text style={styles.text}>Copy</Text>
      </View>
      <Text style={{color: 'red', marginTop: 10, marginLeft: 5, fontSize: 12}}>Cancel Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    alignSelf: 'flex-end',
    marginTop: 215,
    marginRight: 38,
    paddingTop: 10,
    height: 110,
    width: 100,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropdownGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 90
  },
  text: {
    fontSize: 12,
    fontFamily: 'NotoSans_400Regular',
    marginLeft: -10,
    marginBottom: 12
  },
  icon: {
    height: 15,
    marginLeft: -7,
    marginRight: 0,
    resizeMode: 'contain'
  }
});

export default Dropdown;
