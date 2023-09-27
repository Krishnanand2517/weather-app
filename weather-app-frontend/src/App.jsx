import { useState, useEffect } from 'react';
import LocationForm from './components/LocationForm';
import MainPage from './MainPage';

const App = () => {
  const [isLocationFound, setIsLocationFound] = useState(false);
  const [givenLocation, setGivenLocation] = useState('');

  useEffect(() => {
    const appGivenLocation = window.localStorage.getItem('WeatherAppLocation');
    if (appGivenLocation) {
      setIsLocationFound(true);
      setGivenLocation(appGivenLocation);
    }
  }, []);

  const setLocation = (city) => {
    setIsLocationFound(true);
    setGivenLocation(city);
    window.localStorage.setItem('WeatherAppLocation', city);
  };

  if (!isLocationFound) {
    return (
      <LocationForm handleSubmit={setLocation} />
    );
  }

  else {
    return (
      <MainPage city={givenLocation} />
    );
  }
};

export default App;