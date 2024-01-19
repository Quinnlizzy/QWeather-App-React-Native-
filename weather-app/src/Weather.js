// Weather.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6de88e06fa7a4b4c420a3a6140f20b35`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
      {weather && (
        <View style={styles.weatherContainer}>
          <Text>{`Temperature: ${weather.main.temp}°C`}</Text>
          <Text>{`Weather: ${weather.weather[0].description}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherContainer: {
    marginTop: 20,
  },
});

export default Weather;



