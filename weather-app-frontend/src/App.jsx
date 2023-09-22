import { useState, useEffect } from 'react';
import Header from './components/Header';
import weatherService from './services/weather';

const App = () => {
  const [place, setPlace] = useState('');
  const [weather, setWeather] = useState('');
  const [weekday, setWeekday] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getAll();

        const fullDateString = weatherData.dateTime.date;
        const dateParts = fullDateString.split(',').map(part => part.trim());
        const today = dateParts[0];
        const todayDate = `${dateParts[1]}, ${dateParts[2]}`;

        const cur_temp = Math.round(weatherData.temp.temp_current);

        setPlace(`${weatherData.city}, ${weatherData.country}`);
        setWeather(weatherData.weather.condition);
        setWeekday(today);
        setDate(todayDate);
        setTemperature(cur_temp);
        setIcon(weatherData.weather.icon);
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
      />
    </>
  );
};

export default App;