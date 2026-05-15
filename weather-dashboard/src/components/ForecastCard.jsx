function ForecastCard({ forecast }) {
    const daily = forecast.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
    );

    return (
        <div className="mt-6 w-full max-w-xl mx-auto">
            <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-3">
                Pronóstico 5 días
            </h3>
            <div className="grid grid-cols-5 gap-2">
                {daily.map((item) => {
                    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
                    const date = new Date(item.dt_txt);
                    const day = date.toLocaleDateString('es-ES', { weekday: 'short' });

                    return (
                        <div
                            key={item.dt}
                            className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center shadow"
                        >
                            <p className="text-xs text-gray-400 dark:text-gray-500 capitalize">
                                {day}
                            </p>
                            <img
                                src={iconUrl}
                                alt={item.weather[0].description}
                                className="w-10 h-10 mx-auto"
                            />
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                {Math.round(item.main.temp)}°C
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 capitalize mt-1">
                                {item.weather[0].description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ForecastCard;