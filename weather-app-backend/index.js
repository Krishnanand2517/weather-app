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
app.get('/threehour/:city?', async (req, res) => {
    const cityName = req.params.city || 'Puducherry';

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const predictionArray = response.data.list.slice(0, 8);

        const weatherData = predictionArray.map(p => {
            const timestamp = p.dt * 1000;
            const date = new Date(timestamp);

            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

            return {
                dateTime: {
                    date: formattedDate,
                    time: formattedTime
                },
                temp: {
                    temp_current: p.main.temp,
                    temp_min: p.main.temp_min,
                    temp_max: p.main.temp_max
                },
                weather: {
                    condition: p.weather[0].main,
                    description: p.weather[0].description,
                    icon: p.weather[0].icon,
                    humidity: p.main.humidity,
                    rainChance: p.pop
                }
            };
        });
        const dataToShow = {
            city: response.data.city.name,
            country: response.data.city.country,
            prediction: weatherData
        };
        
        res.json(dataToShow);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

// 2.  Get next 5 days prediction data for the same time (eg. everyday at 18:00)
app.get('/fivedays/:city?', async (req, res) => {
    const cityName = req.params.city || 'Puducherry';

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const predictionArray = response.data.list.filter((_, i) => 
            (i !== 0) && (i % 8 === 0) || (i === response.data.list.length - 1)
        );

        const weatherData = predictionArray.map(p => {
            const timestamp = p.dt * 1000;
            const date = new Date(timestamp);

            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

            return {
                dateTime: {
                    date: formattedDate,
                    time: formattedTime
                },
                temp: {
                    temp_current: p.main.temp,
                    temp_min: p.main.temp_min,
                    temp_max: p.main.temp_max
                },
                weather: {
                    condition: p.weather[0].main,
                    description: p.weather[0].description,
                    icon: p.weather[0].icon,
                    humidity: p.main.humidity,
                    rainChance: p.pop
                }
            };
        });
        const dataToShow = {
            city: response.data.city.name,
            country: response.data.city.country,
            prediction: weatherData
        };
        
        res.json(dataToShow);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

// 3.  Get relevant weather data for the current day
app.get('/today/:city?', async (req, res) => {
    const cityName = req.params.city || 'Puducherry';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const prediction = response.data;

        const sunriseTimestamp = prediction.sys.sunrise * 1000;
        const sunsetTimestamp = prediction.sys.sunset * 1000;

        const date = new Date();
        const sunriseDate = new Date(sunriseTimestamp);
        const sunsetDate = new Date(sunsetTimestamp);

        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const formattedDate = date.toLocaleDateString([], dateOptions);
        const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const formattedSunriseTime = sunriseDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const formattedSunsetTime = sunsetDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        
        
        const dataToShow = {
            city: prediction.name,
            country: prediction.sys.country,
            sunrise: formattedSunriseTime,
            sunset: formattedSunsetTime,
            dateTime: {
                date: formattedDate,
                time: formattedTime
            },
            temp: {
                temp_current: prediction.main.temp,
                temp_min: prediction.main.temp_min,
                temp_max: prediction.main.temp_max
            },
            weather: {
                condition: prediction.weather[0].main,
                description: prediction.weather[0].description,
                icon: prediction.weather[0].icon,
                humidity: prediction.main.humidity
            }
        };
        
        res.json(dataToShow);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});