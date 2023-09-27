require('dotenv').config();
const express = require('express');
const app = express();

const weatherRouter = require('./controllers/weather');
const predictionRouter = require('./controllers/prediction');
const revGeoRouter = require('./controllers/rev_geolocation');

app.use(express.json());
app.use(express.static('dist'));
app.use('/weather', weatherRouter);
app.use('/prediction', predictionRouter);
app.use('/revgeo', revGeoRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});