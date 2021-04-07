import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native';
import markerIcon from './assets/marker.png';
import calendarIcon from './assets/calendar.png';
import clockIcon from './assets/clock.png';
import messagingIcon from './assets/messages.png';
import profilePicture from './assets/profile-picture.png';
// import Dropdown from './Dropdown';

const Card = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const icons = [markerIcon, calendarIcon, clockIcon, messagingIcon];
  const iconsDisplay = icons.map(icon =>
    <Image style={styles.icon} source={icon}/>
  );
  const details = ['Gorge Garmin Street ...','Mon, September 21st','10:00AM']
  const detailsDisplay = details.map(detail => <Text style={styles.detail}>{detail}</Text>)

  return (
    <View style={styles.container}>
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
          <Pressable>
            <Text style={styles.title}>...</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.rsvpConfirmation}>You RSVP'd yes - Event is today!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#474956',
    width: 300,
    height: 250,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Noto Sans'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    margin: 5
  },
  cardBody: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  iconsColumn: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 180
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 175,
    marginTop: -40
  },
  icon: {
    height: 30,
    margin: 5,
    resizeMode: 'contain'
  },
  detailsColumn: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 120
  },
  detail: {
    marginTop: 10
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  rsvpConfirmation: {
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    padding: 5
  }
});

export default Card;
