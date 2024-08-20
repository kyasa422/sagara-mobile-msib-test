import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temperature}>{forecast.main.temp}°C</Text>
      <Text style={styles.description}>{forecast.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default ForecastCard;
