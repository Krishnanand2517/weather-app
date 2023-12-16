const weatherRouter = require('express').Router();
const axios = require('axios');


// Get relevant weather data for the current day

weatherRouter.get('/today/:city?', async (req, res) => {
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

module.exports = weatherRouter;