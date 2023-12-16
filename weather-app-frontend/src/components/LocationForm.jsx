import { useState } from 'react';
import PropTypes from 'prop-types';

const LocationForm = ({ handleSubmit, setCurrentCity, city }) => {
    const [location, setLocation] = useState(city);

    const changeLocation = async (event) => {
        event.preventDefault();

        handleSubmit(location);
    };

    const getCurrentCity = (event) => {
        event.preventDefault();

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const lat = pos.coords.latitude;
                const long = pos.coords.longitude;
                setCurrentCity(lat, long);
            }, (error) => {
                console.error('cannot get location:', error);
            });
        } else {
            window.alert("Geolocation is not supported in the browser");
        }
    };

    return (
        <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-10 flex flex-col gap-8 justify-center xl:justify-between text-center">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl 2xl:text-3xl md:font-bold">Provide the location</h2>
            <form onSubmit={changeLocation}>
                <div className="mt-8 flex gap-4 md:gap-10 items-center justify-center">
                    <p className="p-2 text-base md:text-lg 2xl:text-xl font-normal md:font-semibold">City</p>
                    <input className="p-2 text-sm md:text-base 2xl:text-lg"
                        type="text"
                        placeholder="e.g. Mumbai"
                        name="city"
                        value={city || location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button onClick={getCurrentCity} className="p-2 rounded-full text-xs md:text-sm 2xl:text-base font-bold bg-blue-300 border-solid border-gray-700 border-2">
                        Current Location
                    </button>
                </div>

                <div className="mt-20 flex justify-center items-center">
                    <button className="p-4 rounded-full text-base md:text-lg 2xl:text-xl font-extrabold bg-blue-300 border-solid border-black border-2">
                        Proceed
                    </button>
                </div>
            </form>
        </div>
    );
};

LocationForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setCurrentCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
};

export default LocationForm;