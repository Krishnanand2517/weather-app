import PropTypes from 'prop-types';

const Header = ({
    place, weather, weekday, date, temperature, icon,
    minTemp, maxTemp, humidity, rainChance, sunrise, sunset
}) => {
    return (
        <div>
            <div className="px-56 py-10 flex flex-row-reverse justify-between items-center">
                <div>
                    <h3 className="text-3xl font-bold">{place}</h3>
                </div>

                <div>
                    <h3 className="text-lg">{weekday}</h3>
                    <h3>{date}</h3>
                </div>
            </div>

            <div className="px-56 py-10 flex justify-between">
                <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center">
                        <img src={`./${icon}.svg`} alt={`${weather}`} width={100}></img>
                        <h2 className="text-4xl">{weather}</h2>
                    </div>
                    <div>
                        <h2 className="text-7xl">{temperature}&deg;C</h2>
                    </div>
                </div>

                <div className="text-xl pt-3 text-center flex flex-wrap border-solid border-black border-2 rounded-2xl bg-blue-300">
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