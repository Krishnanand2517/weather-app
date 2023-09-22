import PropTypes from 'prop-types';
import '../index.css';

const Header = ({
    place, weather, weekday, date, temperature, icon
}) => {
    return (
        <div>
            <div className="px-24 py-10 flex flex-row-reverse justify-between items-center">
                <div className="mr-48">
                    <h3 className="text-3xl">{place}</h3>
                </div>

                <div className="text-lg">
                    <h3>{weekday}</h3>
                    <h3>{date}</h3>
                </div>
            </div>

            <div className="px-24 py-10 flex items-center gap-24">
                <div className="flex flex-col items-center">
                    <img src={`./${icon}.svg`} alt={`${weather}`} width={100}></img>
                    <h2 className="text-4xl">{weather}</h2>
                </div>
                <div>
                    <h2 className="text-7xl">{temperature}&deg;C</h2>
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
    icon: PropTypes.string.isRequired
};

export default Header;