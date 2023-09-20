require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Radhe Radhe</h1>');
});

app.get('/weather/:city?', async (req, res) => {
    const cityName = req.params.city || 'Puducherry';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

app.get('/forecast/:city?', async (req, res) => {
    const cityName = req.params.city || 'Puducherry';

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

// 1.  Get 3-hourly prediction data for first 8 positions available in the API response
// 2.  Get 5 days prediction data for the same time (eg. everyday at 18:00), including today

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});