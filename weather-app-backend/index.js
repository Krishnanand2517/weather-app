require('dotenv').config();
const express = require('express');
const app = express();

const weatherRouter = require('./controllers/weather');
const predictionRouter = require('./controllers/prediction');

app.use(express.json());
app.use('/weather', weatherRouter);
app.use('/prediction', predictionRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});