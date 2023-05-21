import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const Navigation = useNavigation();

  return (
    <View>
      {/* searchbar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          Navigation.navigate('Destination Search');
        }}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/mountain.jpg')}
        style={styles.image}>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>

        {/* button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
