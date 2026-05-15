import { useState } from 'react';
import {
  getWeatherByCity,
  getForecastByCity,
  getWeatherByCoords,
  getForecastByCoords
} from '../services/weatherService';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchByCity(city) {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCity(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('Ciudad no encontrada. Verifica el nombre e intenta de nuevo.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }

  async function searchByLocation() {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);
          setError(null);
          const { latitude, longitude } = position.coords;
          const weatherData = await getWeatherByCoords(latitude, longitude);
          const forecastData = await getForecastByCoords(latitude, longitude);
          setWeather(weatherData);
          setForecast(forecastData);
        } catch (err) {
          setError('No se pudo obtener el clima de tu ubicación.');
          setWeather(null);
          setForecast(null);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Permiso de ubicación denegado.');
      }
    );
  }

  return { weather, forecast, loading, error, searchByCity, searchByLocation };
}