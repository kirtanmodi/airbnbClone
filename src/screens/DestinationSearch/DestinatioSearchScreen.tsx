import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

const DestinatioSearchScreen = () => {
  const [inputText, setinputText] = useState('');

  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* input */}
      <TextInput
        placeholder="Where are you going?"
        style={styles.textInput}
        value={inputText}
        onChangeText={setinputText}
      />

      {/* List of destinations */}
      <FlatList
        data={search}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              Navigation.navigate('Guests');
            }}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} color="black" />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinatioSearchScreen;
