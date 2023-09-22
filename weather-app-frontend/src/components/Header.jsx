import sunCloudIcon from '../img/sun_cloud.svg';
import '../css/main.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-weather">
                <img src={sunCloudIcon} alt="cloudy" width={100}></img>
                <h2>Cloudy</h2>
                <h3>Puducherry, India</h3>
            </div>

            <div className="header-datetime">
                <h3>Friday</h3>
                <h3>22 September, 2023</h3>
            </div>
        </div>
    );
};

export default Header;