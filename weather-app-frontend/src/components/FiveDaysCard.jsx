import PropTypes from 'prop-types';

const FiveDaysCard = ({
    nextDate, nextDay, nextIcon, nextMinTemp, nextMaxTemp,
    nextWeather, nextRainChance
}) => {
    return (
        <div className="bg-blue-300 w-full p-4 rounded-lg flex justify-between items-center text-center border-solid border-black border-2">
            <div className="w-1/4">
                <p className="text-lg 2xl:text-2xl font-semibold">{nextDay}</p>
                <p className="text-xl 2xl:text-3xl font-bold">{nextDate}</p>
            </div>
            <div className="w-1/4">
                <img className="mx-auto w-20 lg:w-24 2xl:w-28" src={`./${nextIcon}.svg`} alt="weather-icon"></img>
            </div>
            <div className="w-1/4">
                <p className="text-lg 2xl:text-2xl font-semibold">{nextMinTemp}&deg;C / {nextMaxTemp}&deg;C</p>
                <p className="text-xl 2xl:text-2xl font-bold">{nextWeather}</p>
            </div>
            <div className="w-1/4 hidden md:block">
                <p className="text-lg 2xl:text-2xl font-bold">{nextRainChance} %</p>
                <p className="text-sm 2xl:text-lg font-semibold">Chance of Rain</p>
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