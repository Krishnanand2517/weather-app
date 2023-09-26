import { useState, useEffect } from 'react';
import LocationForm from './components/LocationForm';
import Header from './components/Header';
import ThreeHour from './components/ThreeHour';
import FiveDays from './components/FiveDays';
import weatherService from './services/weather';
import threeHourService from './services/threehour';
import fiveDaysService from './services/fivedays';

const App = () => {
  const [isLocationFound, setIsLocationFound] = useState(false);
  const [givenLocation, setGivenLocation] = useState('');

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

  const [nextDateArray, setNextDateArray] = useState([]);
  const [nextDayArray, setNextDayArray] = useState([]);
  const [nextIconArray, setNextIconArray] = useState([]);
  const [nextMinTempArray, setNextMinTempArray] = useState([]);
  const [nextMaxTempArray, setNextMaxTempArray] = useState([]);
  const [nextWeatherArray, setNextWeatherArray] = useState([]);
  const [nextRainChanceArray, setNextRainChanceArray] = useState([]);

  useEffect(() => {
    const appGivenLocation = window.localStorage.getItem('WeatherAppLocation');
    if (appGivenLocation) {
      setIsLocationFound(true);
      setGivenLocation(appGivenLocation);
    }

    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getAll();
        const threeHourData = await threeHourService.getAll();
        const fiveDaysData = await fiveDaysService.getAll();

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

        const nextDateStrings = fiveDaysData.prediction.map(p => p.dateTime.date);
        const nextDateStringsFormatted = nextDateStrings.map(dateString => {
          const [day, month, year] = dateString.split('/').map(Number);

          const date = new Date(year, month - 1, day);
          const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const weekday = weekdays[date.getDay()];

          return `${weekday},${day}/${month}`;
        });
        const nextDaysToShow = nextDateStringsFormatted.map(n => n.split(',')[0]);
        const nextDatesToShow = nextDateStringsFormatted.map(n => n.split(',')[1]);

        const nextIconsToShow = fiveDaysData.prediction.map(p => p.weather.icon);
        const nextMinTempsToShow = fiveDaysData.prediction.map(p => Math.round(p.temp.temp_min - 1));
        const nextMaxTempsToShow = fiveDaysData.prediction.map(p => Math.round(p.temp.temp_max + 1));
        const nextWeathersToShow = fiveDaysData.prediction.map(p => p.weather.condition);
        const nextRainChancesToShow = fiveDaysData.prediction.map(p => Math.round(p.weather.rainChance * 100));

        setPlace(`${weatherData.city}, ${weatherData.country}`);
        setWeather(weatherData.weather.condition);
        setWeekday(today);
        setDate(todayDate);
        setTemperature(cur_temp);
        setIcon(weatherData.weather.icon);

        setMinTemp(min_temp - 1);
        setMaxTemp(max_temp + 1);
        setHumidity(weatherData.weather.humidity);
        setRainChance(Math.round(threeHourData.prediction[0].weather.rainChance * 100));
        setSunrise(weatherData.sunrise);
        setSunset(weatherData.sunset);

        setDateArray(predictionDatesToShow);
        setTimeArray(predictionTimes);
        setIconArray(predictionIcons);
        setTempArray(predictionTemps);

        setNextDateArray(nextDatesToShow);
        setNextDayArray(nextDaysToShow);
        setNextIconArray(nextIconsToShow);
        setNextMinTempArray(nextMinTempsToShow);
        setNextMaxTempArray(nextMaxTempsToShow);
        setNextWeatherArray(nextWeathersToShow);
        setNextRainChanceArray(nextRainChancesToShow);
      } catch (error) {
        console.error("error fetching weather data:", error);
      }
    }

    fetchData();
  }, []);

  if (!isLocationFound) {
    return (
      <>
        <LocationForm />
      </>
    );
  }

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

      <FiveDays
        nextDateArray={nextDateArray}
        nextDayArray={nextDayArray}
        nextIconArray={nextIconArray}
        nextMinTempArray={nextMinTempArray}
        nextMaxTempArray={nextMaxTempArray}
        nextWeatherArray={nextWeatherArray}
        nextRainChanceArray={nextRainChanceArray}
      />
    </>
  );
};

export default App;