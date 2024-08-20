import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{weather.name}</Text>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: '#888',
  },
});

export default WeatherCard;
