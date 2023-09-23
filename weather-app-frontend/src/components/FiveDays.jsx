// import PropTypes from 'prop-types';
// import { useEffect } from 'react';

const FiveDays = () => {
    return (
        <div>
            <h2 className="mx-56 text-3xl font-bold">5-Day Forecast</h2>
            <div className="px-56 py-5 flex flex-col justify-center gap-4">
                <div className="bg-blue-300 w-full p-4 rounded-lg flex justify-between text-center">
                    <div>
                        <p>Tuesday</p>
                        <p>19/9</p>
                    </div>
                    <div>
                        ICON
                    </div>
                    <div>
                        <p>22&deg;C / 34&deg;C</p>
                        <p>Clouds</p>
                    </div>
                    <div>
                        <p>25%</p>
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

export default FiveDays;