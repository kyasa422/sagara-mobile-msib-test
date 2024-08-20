import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import { getWeatherData, getForecastData } from '../services/WeatherService';

const HomeScreen = () => {
  const [city, setCity] = useState('Jakarta');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = useCallback(async () => {
    try {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
      const forecastData = await getForecastData(city);
      setForecast(forecastData.list);
    } catch (error) {
      console.error('Failed to fetch weather data.', error);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
      {forecast.map((day, index) => (
        <ForecastCard key={index} forecast={day} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});

export default HomeScreen;
