function WeatherCard({ weather }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {weather.name}, {weather.sys.country}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 capitalize mt-1">
                        {weather.weather[0].description}
                    </p>
                </div>
                <img src={iconUrl} alt={weather.weather[0].description} className="w-20 h-20" />
            </div>

            <div className="mt-4">
                <p className="text-6xl font-thin text-blue-500">
                    {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-gray-400 dark:text-gray-500 mt-1">
                    Sensación térmica: {Math.round(weather.main.feels_like)}°C
                </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Humedad</p>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-1">
                        {weather.main.humidity}%
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Viento</p>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-1">
                        {Math.round(weather.wind.speed)} m/s
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Presión</p>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-1">
                        {weather.main.pressure} hPa
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;