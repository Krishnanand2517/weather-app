import PropTypes from 'prop-types';

const ThreeHourCard = ({
    date, time, icon, temperature
}) => {
    return (
        <div className="bg-blue-300 shadow-md p-4 w-36 flex-shrink-0 flex-grow text-center border-solid border-black border-2 rounded-2xl">
            <div className="text-lg font-bold">{date}</div>
            <div>{time}</div>
            <div>
                <img src={`./${icon}.svg`} alt="weather-icon" width={100}></img>
            </div>
            <div className="font-bold">{Math.round(temperature)}&deg;C</div>
        </div>
    );
};

ThreeHourCard.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
};

export default ThreeHourCard;