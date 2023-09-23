import { useState, useEffect } from 'react';
import Header from './components/Header';
import ThreeHour from './components/ThreeHour';
import weatherService from './services/weather';
import threeHourService from './services/threehour';

const App = () => {
  const [place, setPlace] = useState('');
  const [weather, setWeather] = useState('');
  const [weekday, setWeekday] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');

  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [rainChance, setRainChance] = useState(0);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  const [dateArray, setDateArray] = useState([]);
  const [timeArray, setTimeArray] = useState([]);
  const [iconArray, setIconArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getAll();
        const threeHourData = await threeHourService.getAll();

        const fullDateString = weatherData.dateTime.date;
        const dateParts = fullDateString.split(',').map(part => part.trim());
        const today = dateParts[0];
        const todayDate = `${dateParts[1]}, ${dateParts[2]}`;

        const cur_temp = Math.round(weatherData.temp.temp_current);
        const min_temp = Math.round(weatherData.temp.temp_min);
        const max_temp = Math.round(weatherData.temp.temp_max);

        const predictionDates = threeHourData.prediction.map(p => p.dateTime.date);
        const predictionDatesToShow = predictionDates.map(d => {
          const parts = d.split('/');
          return `${parts[0]}/${parts[1]}`;
        });

        const predictionTimes = threeHourData.prediction.map(p => p.dateTime.time);
        const predictionIcons = threeHourData.prediction.map(p => p.weather.icon);
        const predictionTemps = threeHourData.prediction.map(p => p.temp.temp_current);

        setPlace(`${weatherData.city}, ${weatherData.country}`);
        setWeather(weatherData.weather.condition);
        setWeekday(today);
        setDate(todayDate);
        setTemperature(cur_temp);
        setIcon(weatherData.weather.icon);

        setMinTemp(min_temp - 1);
        setMaxTemp(max_temp + 1);
        setHumidity(weatherData.weather.humidity);
        setRainChance(threeHourData.prediction[0].weather.rainChance * 100);
        setSunrise(weatherData.sunrise);
        setSunset(weatherData.sunset);

        setDateArray(predictionDatesToShow);
        setTimeArray(predictionTimes);
        setIconArray(predictionIcons);
        setTempArray(predictionTemps);
      } catch (error) {
        console.error("error fetching weather data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header
        place={place}
        weather={weather}
        weekday={weekday}
        date={date}
        temperature={temperature}
        icon={icon}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        rainChance={rainChance}
        sunrise={sunrise}
        sunset={sunset}
      />

      <ThreeHour
        dateArray={dateArray}
        timeArray={timeArray}
        iconArray={iconArray}
        tempArray={tempArray}
      />
    </>
  );
};

export default App;