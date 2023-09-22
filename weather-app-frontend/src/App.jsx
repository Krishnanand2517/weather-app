import { useState, useEffect } from 'react';
import Header from './components/Header';
import weatherService from './services/weather';

const App = () => {
  const [place, setPlace] = useState('');
  const [weather, setWeather] = useState('');
  const [weekday, setWeekday] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await weatherService.getAll();

        const fullDateString = weatherData.dateTime.date;
        const dateParts = fullDateString.split(',').map(part => part.trim());
        const today = dateParts[0];
        const todayDate = `${dateParts[1]}, ${dateParts[2]}`;

        setPlace(`${weatherData.city}, ${weatherData.country}`);
        setWeather(weatherData.weather.condition);
        setWeekday(today);
        setDate(todayDate);
      } catch (error) {
        console.error("error fetching weather data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header place={place} weather={weather} weekday={weekday} date={date} />
    </>
  );
};

export default App;