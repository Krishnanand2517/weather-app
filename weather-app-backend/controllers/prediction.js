const predictionRouter = require('express').Router();
const axios = require('axios');


// Get 3-hourly prediction data for first 8 positions available in the API response

predictionRouter.get('/threehour/:city?', async (req, res) => {
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


// Get next 5 days prediction data for the same time (eg. everyday at 18:00)

predictionRouter.get('/fivedays/:city?', async (req, res) => {
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

module.exports = predictionRouter;