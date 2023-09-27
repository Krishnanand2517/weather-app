const revGeoRouter = require('express').Router();
const axios = require('axios');


// Get reverse geocoding response for latitudes and longitudes

revGeoRouter.get('/:lat?/:long?', async (req, res) => {
    const lat = req.params.lat || '20.5';
    const long = req.params.long || '17.3';

    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'error connecting to the API' });
    }
});

module.exports = revGeoRouter;