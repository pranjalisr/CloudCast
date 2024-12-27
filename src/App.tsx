import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('/api/weather');
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">CloudCast</h1>
        {loading ? (
          <p className="text-center">Loading weather data...</p>
        ) : weather ? (
          <div>
            <p className="text-xl mb-2">Current weather in {weather.location}:</p>
            <p className="text-4xl font-bold mb-4">{weather.temperature}°C</p>
            <p className="text-lg">{weather.description}</p>
          </div>
        ) : (
          <p className="text-center text-red-500">Failed to load weather data.</p>
        )}
      </div>
    </div>
  );
};

export default App;

