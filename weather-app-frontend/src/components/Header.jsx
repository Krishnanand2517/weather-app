import PropTypes from 'prop-types';
import sunCloudIcon from '../img/sun_cloud.svg';
import '../index.css';

const Header = ({
    place, weather, weekday, date
}) => {
    return (
        <div className="px-24 py-10 flex flex-row-reverse justify-between items-center">
            <div className="flex items-center">
                <div>
                    <img src={sunCloudIcon} alt="cloudy" width={100}></img>
                </div>
                <div>
                    <h2 className="text-2xl">{weather}</h2>
                    <h3 className="text-xl">{place}</h3>
                </div>
            </div>

            <div className="text-lg">
                <h3>{weekday}</h3>
                <h3>{date}</h3>
            </div>
        </div>
    );
};

Header.propTypes = {
    place: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default Header;