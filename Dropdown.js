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
    marginTop: 225,
    marginRight: 37,
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
    borderTopRightRadius: 0,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  dropdownGroup: {
    margin: 5,
    width: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  text: {
    fontSize: 12,
    fontFamily: 'NotoSans_400Regular'
  },
  icon: {
    marginLeft: -10,
    height: 15,
    resizeMode: 'contain'
  }
});

export default Dropdown;
