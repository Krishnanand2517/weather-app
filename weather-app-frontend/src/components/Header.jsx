import PropTypes from 'prop-types';
import sunCloudIcon from '../img/sun_cloud.svg';
import '../css/main.css';

const Header = ({
    place, weather, weekday, date
}) => {
    return (
        <div className="header">
            <div className="header-weather">
                <img src={sunCloudIcon} alt="cloudy" width={100}></img>
                <h2>{weather}</h2>
                <h3>{place}</h3>
            </div>

            <div className="header-datetime">
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