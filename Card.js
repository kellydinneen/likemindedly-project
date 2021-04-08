import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';

import markerIcon from './assets/marker.png';
import calendarIcon from './assets/calendar.png';
import clockIcon from './assets/clock.png';
import messagingIcon from './assets/messages.png';
import profilePicture from './assets/profile-picture.png';

import Dropdown from './Dropdown';

const Card = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const icons = [markerIcon, calendarIcon, clockIcon, messagingIcon];
  const iconsDisplay = icons.map((icon, i) =>
    <Image style={styles.icon} source={icon} key={i}/>
  );

  const details = ['Gorge Garmin Street ...','Mon, September 21st','10:00AM']
  const detailsDisplay = details.map((detail, i) => <Text style={styles.detail} key={i}>{detail}</Text>)

  const ellipsis = dropdownVisible
    ? require('./ellipsis-white.png')
    : require('./ellipsis-grey.png');

  const buttonColor = dropdownVisible
    ? '#474956'
    : '#EEEEEE';

    return (
      <>
        <View style={styles.card}>
          <Text style={styles.title}>Game Night!</Text>
          <View style={styles.cardBody}>
            <View style={styles.iconsColumn}>
              {iconsDisplay}
            </View>
            <View style={styles.detailsColumn}>
              {detailsDisplay}
            </View>
            <View style={styles.rightColumn}>
              <Image style={styles.profilePicture} source={require('./assets/profile-picture.png')}/>
              <TouchableOpacity activeOpacity={0.5} style={[{backgroundColor: buttonColor}, styles.button]} onPress={()=>setDropdownVisible(!dropdownVisible)}>
                <Image style={styles.ellipsis} source={ellipsis}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rsvpConfirmation}>
            <Text style={{color:'#fff', fontFamily: 'NotoSans_400Regular', fontSize: 12}}>You RSVP'd yes - Event is today!</Text>
          </View>
        </View>
        {dropdownVisible && <Dropdown/>}
      </>
    )

}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    color: '#474956',
    shadowColor: "black",
    shadowOffset:{
      width: -3,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 325,
    height: 210,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  title: {
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'NotoSans_700Bold'
  },
  cardBody: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  iconsColumn: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 170
  },
  icon: {
    height: 30,
    margin: 5,
    resizeMode: 'contain'
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    marginTop: -20,
  },
  detailsColumn: {
    flex: 3,
    height: 130,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },
  detail: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'NotoSans_400Regular'
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  button: {
    width: 40,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rsvpConfirmation: {
    alignSelf: 'flex-end',
    width: 260,
    padding: 7,
    backgroundColor: '#1EBC82',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center'
  },
  ellipsis: {
    height: 25,
    resizeMode: 'contain'
  }
});

export default Card;
