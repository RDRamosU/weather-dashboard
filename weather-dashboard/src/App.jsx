import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const { weather, forecast, loading, error, searchByCity, searchByLocation } = useWeather();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4 py-10">

        <div className="max-w-xl mx-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              🌤 Weather Dashboard
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? '☀ Claro' : '🌙 Oscuro'}
            </button>
          </div>

          {/* BARRA DE BÚSQUEDA */}
          <SearchBar
            onSearch={searchByCity}
            onGeolocate={searchByLocation}
            loading={loading}
          />

          {/* LOADING */}
          {loading && (
            <p className="text-center text-gray-400 dark:text-gray-500 mt-8">
              Cargando...
            </p>
          )}

          {/* ERROR */}
          {error && <ErrorMessage message={error} />}

          {/* CLIMA ACTUAL */}
          {weather && !loading && <WeatherCard weather={weather} />}

          {/* PRONÓSTICO */}
          {forecast && !loading && <ForecastCard forecast={forecast} />}

        </div>
      </div>
    </div>
  );
}

export default App;