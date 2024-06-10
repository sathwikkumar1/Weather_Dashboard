import axios from 'axios';

const API_KEY = '674d63aa262863cddd0677b9c27d0e18'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
