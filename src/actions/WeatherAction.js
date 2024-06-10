import { fetchWeather } from '../services/WeatherService';

export const setWeatherData = (data) => ({
  type: 'SET_WEATHER_DATA',
  payload: data,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const getWeatherData = (location) => {
  return async (dispatch) => {
    try {
      const data = await fetchWeather(location);
      dispatch(setWeatherData(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
