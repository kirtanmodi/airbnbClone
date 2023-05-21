import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);

  const Naavigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={styles.adult}>Adult</Text>
            <Text style={styles.age}>Age 13 or above</Text>
          </View>

          {/* buttons with value */}
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.number}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={styles.adult}>Adult</Text>
            <Text style={styles.age}>Age 13 or above</Text>
          </View>

          {/* buttons with value */}
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.number}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          {/* title */}
          <View>
            <Text style={styles.adult}>Adult</Text>
            <Text style={styles.age}>Age 13 or above</Text>
          </View>

          {/* buttons with value */}
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.number}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => {
            Naavigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            });
          }}
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
