const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/weather', async (req, res) => {
  try {
    // This would typically call a real weather API
    const weatherData = {
      location: 'New York',
      temperature: 22,
      description: 'Partly cloudy'
    };
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Weather service listening at http://localhost:${port}`);
});

