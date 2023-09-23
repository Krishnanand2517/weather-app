import PropTypes from 'prop-types';

const Header = ({
    place, weather, weekday, date, temperature, icon,
    minTemp, maxTemp, humidity, rainChance, sunrise, sunset
}) => {
    return (
        <div>
            <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-10 flex justify-between items-center font-medium">
                <div>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold">{place}</h3>
                </div>

                <div>
                    <h3 className="text-base sm:text-lg">{weekday}</h3>
                    <h3 className="text-sm sm:text-base">{date}</h3>
                </div>
            </div>

            <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-10 flex gap-8 justify-center xl:justify-between">
                <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center font-medium">
                        <img className="w-36 lg:w-24 2xl:w-44" src={`./${icon}.svg`} alt={`${weather}`}></img>
                        <h2 className="text-2xl sm:text-4xl 2xl:text-5xl">{weather}</h2>
                    </div>
                    <div>
                        <h2 className="text-4xl sm:text-6xl 2xl:text-7xl font-bold">{temperature}&deg;C</h2>
                    </div>
                </div>

                <div className="hidden lg:flex text-xl 2xl:text-2xl font-semibold py-3 text-center flex-wrap border-solid border-black border-2 rounded-2xl bg-blue-300">
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{minTemp}&deg;C</h3>
                        <h3 className="text-base 2xl:text-lg">Lowest</h3>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{humidity}%</h3>
                        <h3 className="text-base 2xl:text-lg">Humidity</h3>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{sunrise}</h3>
                        <h3 className="text-base 2xl:text-lg">Sunrise</h3>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{maxTemp}&deg;C</h3>
                        <h3 className="text-base 2xl:text-lg">Highest</h3>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{rainChance}%</h3>
                        <h3 className="text-base 2xl:text-lg">Chance of Rain</h3>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-center">
                        <h3>{sunset}</h3>
                        <h3 className="text-base 2xl:text-lg">Sunset</h3>
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