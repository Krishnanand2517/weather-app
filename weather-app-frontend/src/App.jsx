import { useState, useEffect } from 'react';
import LocationForm from './components/LocationForm';
import MainPage from './MainPage';
import currentLocationService from './services/currentlocation';

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

  const setCurrentLocationInForm = async (lat, long) => {
    const geoData = await currentLocationService.getAll(lat, long);
    setGivenLocation(geoData[0].name);
  };

  if (!isLocationFound) {
    return (
      <LocationForm
        city={givenLocation}
        handleSubmit={setLocation}
        setCurrentCity={setCurrentLocationInForm}
      />
    );
  }

  else {
    return (
      <MainPage city={givenLocation} />
    );
  }
};

export default App;