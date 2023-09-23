import PropTypes from 'prop-types';
// import { useEffect } from 'react';

const FiveDays = ({
    nextDateArray, nextDayArray, nextIconArray, nextMinTempArray, nextMaxTempArray,
    nextWeatherArray, nextRainChanceArray
}) => {
    return (
        <div>
            <h2 className="mx-56 text-3xl font-bold">5-Day Forecast</h2>
            <div className="px-56 py-5 flex flex-col justify-center gap-4">
                <div className="bg-blue-300 w-full p-4 rounded-lg flex justify-between items-center text-center">
                    <div>
                        <p>{nextDayArray[0]}</p>
                        <p>{nextDateArray[0]}</p>
                    </div>
                    <div>
                        {nextIconArray[0]}
                    </div>
                    <div>
                        <p>{nextMinTempArray[0]}&deg;C / {nextMaxTempArray[0]}&deg;C</p>
                        <p>{nextWeatherArray[0]}</p>
                    </div>
                    <div>
                        <p>{nextRainChanceArray[0]}%</p>
                        <p>Rain</p>
                    </div>
                </div>
                <div className="bg-blue-300 w-full p-4 rounded-lg">CONTENT</div>
                <div className="bg-blue-300 w-full p-4 rounded-lg">CONTENT</div>
                <div className="bg-blue-300 w-full p-4 rounded-lg">CONTENT</div>
                <div className="bg-blue-300 w-full p-4 rounded-lg">CONTENT</div>
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