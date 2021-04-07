import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import markerIcon from './assets/marker.png';
import calendarIcon from './assets/calendar.png';
import clockIcon from './assets/clock.png';
import messagingIcon from './assets/messages.png';
import profilePicture from './assets/profile-picture.png';
// import Dropdown from './Dropdown';

const Card = () => {

  // const [dropdownVisible, setDropdownVisible] = useState(false);
  const icons = [markerIcon, calendarIcon, clockIcon, messagingIcon];
  const iconsDisplay = icons.map(icon => <Image style={styles.icon} src={icon}/>);
  const details = ['Gorge Garmin Street ...','Mon, September 21st','10:00AM']
  const detailsDisplay = details.map(detail => <Text style={styles.detail}>{detail}</Text>)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Night!</Text>
      <Text>You RSVP'd yes - Event is today!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#474956',
    width: 200,
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Noto Sans'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24
  }
});

export default Card;
