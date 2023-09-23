import PropTypes from 'prop-types';
import FiveDaysCard from './FiveDaysCard';

const FiveDays = ({
    nextDateArray, nextDayArray, nextIconArray, nextMinTempArray, nextMaxTempArray,
    nextWeatherArray, nextRainChanceArray
}) => {
    return (
        <div>
            <h2 className="mx-56 text-3xl font-bold">5-Day Forecast</h2>
            <div className="px-56 py-5 flex flex-col justify-center gap-4">
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