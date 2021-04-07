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
        <View>
          {iconsDisplay}
        </View>
        <View>
          {detailsDisplay}
        </View>
      </View>
      <Text>You RSVP'd yes - Event is today!</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Noto Sans'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24
  },
  cardBody: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row'
  },
  iconsColumn: {
    justifyContent: 'space-between'
  },
  icon: {
    height: 30,
    margin: 5,
    resizeMode: 'contain'
  },
  detailsColumn: {
    flex: 2,
  }
});

export default Card;
