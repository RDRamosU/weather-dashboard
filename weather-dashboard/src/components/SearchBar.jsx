import { useState } from 'react';

function SearchBar({ onSearch, onGeolocate, loading }) {
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (city.trim() === '') return;
        onSearch(city.trim());
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Buscar ciudad..."
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition disabled:opacity-50"
                >
                    Buscar
                </button>
                <button
                    type="button"
                    onClick={onGeolocate}
                    disabled={loading}
                    title="Usar mi ubicación"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition disabled:opacity-50"
                >
                    📍
                </button>
            </form>
        </div>
    );
}

export default SearchBar;