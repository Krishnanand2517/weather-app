import PropTypes from 'prop-types';
import FiveDaysCard from './FiveDaysCard';

const FiveDays = ({
    nextDateArray, nextDayArray, nextIconArray, nextMinTempArray, nextMaxTempArray,
    nextWeatherArray, nextRainChanceArray
}) => {
    return (
        <div>
            <h2 className="mx-12 md:mx-36 lg:mx-56 2xl:mx-96 text-2xl lg:text-3xl font-bold">5-Day Forecast</h2>
            <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-5 flex flex-col justify-center gap-4">
                {nextDateArray.map((_, i) => (
                    <FiveDaysCard
                        key={i}
                        nextDate={nextDateArray[i]}
                        nextDay={nextDayArray[i]}
                        nextIcon={nextIconArray[i]}
                        nextMinTemp={nextMinTempArray[i]}
                        nextMaxTemp={nextMaxTempArray[i]}
                        nextWeather={nextWeatherArray[i]}
                        nextRainChance={nextRainChanceArray[i]}
                    />
                ))}
            </div>
        </div>
    )
};

FiveDays.propTypes = {
    nextDateArray: PropTypes.array.isRequired,
    nextDayArray: PropTypes.array.isRequired,
    nextIconArray: PropTypes.array.isRequired,
    nextMinTempArray: PropTypes.array.isRequired,
    nextMaxTempArray: PropTypes.array.isRequired,
    nextWeatherArray: PropTypes.array.isRequired,
    nextRainChanceArray: PropTypes.array.isRequired
};

export default FiveDays;