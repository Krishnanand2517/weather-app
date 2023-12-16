import PropTypes from 'prop-types';

const ThreeHourCard = ({
    date, time, icon, temperature
}) => {
    return (
        <div className="bg-blue-300 shadow-md p-4 w-36 xl:w-44 2xl:w-52 flex-shrink-0 flex-grow text-center border-solid border-black border-2 rounded-2xl">
            <div className="text-lg 2xl:text-2xl font-bold">{date}</div>
            <div className="2xl:text-lg">{time}</div>
            <div>
                <img className="mx-auto w-20 lg:w-24 2xl:w-28" src={`./${icon}.svg`} alt="weather-icon" width={100}></img>
            </div>
            <div className="2xl:text-2xl font-bold">{Math.round(temperature)}&deg;C</div>
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