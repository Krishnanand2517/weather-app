import PropTypes from 'prop-types';

const FiveDaysCard = ({
    nextDate, nextDay, nextIcon, nextMinTemp, nextMaxTemp,
    nextWeather, nextRainChance
}) => {
    return (
        <div className="bg-blue-300 w-full p-4 rounded-lg flex justify-between items-center text-center border-solid border-black border-2">
            <div className="w-1/4">
                <p className="text-lg font-semibold">{nextDay}</p>
                <p className="text-xl font-bold">{nextDate}</p>
            </div>
            <div className="w-1/4">
                <img src={`./${nextIcon}.svg`} alt="weather-icon" width={100}></img>
            </div>
            <div className="w-1/4">
                <p className="text-lg font-semibold">{nextMinTemp}&deg;C / {nextMaxTemp}&deg;C</p>
                <p className="text-xl font-bold">{nextWeather}</p>
            </div>
            <div className="w-1/4">
                <p className="text-lg font-bold">{nextRainChance} %</p>
                <p className="text-sm font-semibold">Chance of Rain</p>
            </div>
        </div>
    );
};

FiveDaysCard.propTypes = {
    nextDate: PropTypes.string.isRequired,
    nextDay: PropTypes.string.isRequired,
    nextIcon: PropTypes.string.isRequired,
    nextMinTemp: PropTypes.number.isRequired,
    nextMaxTemp: PropTypes.number.isRequired,
    nextWeather: PropTypes.string.isRequired,
    nextRainChance: PropTypes.number.isRequired
};

export default FiveDaysCard;