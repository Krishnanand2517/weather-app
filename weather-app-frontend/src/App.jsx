import { useState, useEffect } from 'react';
import Header from './components/Header';
import ThreeHour from './components/ThreeHour';
import weatherService from './services/weather';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getAll();

        const fullDateString = weatherData.dateTime.date;
        const dateParts = fullDateString.split(',').map(part => part.trim());
        const today = dateParts[0];
        const todayDate = `${dateParts[1]}, ${dateParts[2]}`;

        const cur_temp = Math.round(weatherData.temp.temp_current);
        const min_temp = Math.round(weatherData.temp.temp_min);
        const max_temp = Math.round(weatherData.temp.temp_max);

        setPlace(`${weatherData.city}, ${weatherData.country}`);
        setWeather(weatherData.weather.condition);
        setWeekday(today);
        setDate(todayDate);
        setTemperature(cur_temp);
        setIcon(weatherData.weather.icon);

        setMinTemp(min_temp - 1);
        setMaxTemp(max_temp + 1);
        setHumidity(weatherData.weather.humidity);
        setRainChance(23);    // TO BE TAKEN FROM PREDICTION SERVICE LATER
        setSunrise(weatherData.sunrise);
        setSunset(weatherData.sunset);
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

      <ThreeHour />
    </>
  );
};

export default App;