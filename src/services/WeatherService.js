import axios from 'axios';

const API_KEY = '458b632f2825daff2f51fb79337b1991';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    throw error;
  }
};

const getForecastData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}forecast`, {
      params: {
        q: city,
        units: 'metric',
        cnt: 4,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast data: ', error);
    throw error;
  }
};

export { getWeatherData, getForecastData };
