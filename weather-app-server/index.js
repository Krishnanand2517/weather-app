require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const weatherRouter = require("./controllers/weather");
const predictionRouter = require("./controllers/prediction");
const revGeoRouter = require("./controllers/rev_geolocation");

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRouter);
app.use("/prediction", predictionRouter);
app.use("/revgeo", revGeoRouter);

app.get("/", (_req, res) => {
  res.send("Server is working!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
