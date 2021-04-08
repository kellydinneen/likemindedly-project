import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Dropdown = () => {

  return (
    <View style={styles.dropdown}>
      <View style={styles.dropdownGroup}>
        <Image style={styles.icon} source={require('./assets/edit.png')}/>
        <Text style={[{marginLeft: -8}, styles.text]}>Rename</Text>
      </View>
      <View style={styles.dropdownGroup}>
        <Image style={styles.icon} source={require('./assets/copy.png')}/>
        <Text style={[{marginLeft: -8}, styles.text]}>Copy</Text>
      </View>
      <View style={[{
        borderTopColor: '#E8E8E8',
        borderStyle: 'solid',
        borderTopWidth: 1
      }, styles.dropdownGroup]}>
        <Text style={[{color: 'red', marginTop: 10, marginLeft: 5}, styles.text]}>Cancel Event</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    alignSelf: 'flex-end',
    marginTop: 215,
    marginRight: 38,
    paddingTop: 10,
    shadowColor: "black",
    shadowOffset:{
      width: 0,
      height: 3
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    height: 110,
    width: 100,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  dropdownGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 90,
    margin: 5
  },
  text: {
    fontSize: 12,
    fontFamily: 'NotoSans_400Regular'
  },
  icon: {
    height: 15,
    resizeMode: 'contain',
    marginLeft: -10
  }
});

export default Dropdown;
