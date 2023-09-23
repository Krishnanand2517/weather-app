import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Header = ({
    place, weather, weekday, date, temperature, icon,
    minTemp, maxTemp, humidity, rainChance, sunrise, sunset
}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <div className="px-56 py-10 flex justify-between items-center font-medium">
                <div>
                    <h3 className="text-3xl font-extrabold">{place}</h3>
                </div>

                <div>
                    <h3 className="text-lg">{weekday}</h3>
                    <h3>{date}</h3>
                    <h3>{windowWidth}</h3>
                </div>
            </div>

            <div className="justify-center px-56 py-10 flex xl:justify-between">
                <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center font-medium">
                        <img src={`./${icon}.svg`} alt={`${weather}`} width={100}></img>
                        <h2 className="text-4xl">{weather}</h2>
                    </div>
                    <div>
                        <h2 className="text-6xl font-bold">{temperature}&deg;C</h2>
                    </div>
                </div>

                <div className="hidden xl:flex text-xl font-semibold pt-3 text-center flex-wrap border-solid border-black border-2 rounded-2xl bg-blue-300">
                    <div className="w-1/3">
                        <h3>{minTemp}&deg;C</h3>
                        <h3 className="text-base">Lowest</h3>
                    </div>
                    <div className="w-1/3">
                        <h3>{humidity}%</h3>
                        <h3 className="text-base">Humidity</h3>
                    </div>
                    <div className="w-1/3">
                        <h3>{sunrise}</h3>
                        <h3 className="text-base">Sunrise</h3>
                    </div>
                    <div className="w-1/3">
                        <h3>{maxTemp}&deg;C</h3>
                        <h3 className="text-base">Highest</h3>
                    </div>
                    <div className="w-1/3">
                        <h3>{rainChance}%</h3>
                        <h3 className="text-base">Chance of Rain</h3>
                    </div>
                    <div className="w-1/3">
                        <h3>{sunset}</h3>
                        <h3 className="text-base">Sunset</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    place: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    rainChance: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
};

export default Header;