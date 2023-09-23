// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import '../index.css';

const ThreeHour = () => {
    useEffect(() => {
        const scrollContainer = document.getElementById('scroll-container');
        const leftGradient = document.getElementById('left-gradient');
        const rightGradient = document.getElementById('right-gradient');

        scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollLeft === 0) {
                leftGradient.classList.add('hidden');
            } else {
                leftGradient.classList.remove('hidden');
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 3) {
                rightGradient.classList.add('hidden');
            } else {
                rightGradient.classList.remove('hidden');
            }
        });

        return () => {
            scrollContainer.removeEventListener('scroll', () => { });
        };
    }, []);

    return (
        <div className="px-56 py-10 flex items-center justify-center relative">
            <div className="absolute left-0 top-0 w-24 ml-56 h-full bg-gradient-to-r from-sky-light to-transparent hidden" id="left-gradient"></div>
            <div className="absolute right-0 top-0 w-28 mr-56 h-full bg-gradient-to-l from-sky-light to-transparent" id="right-gradient"></div>

            <div className="w-full overflow-x-auto" id="scroll-container">
                <div className="flex p-4 gap-4">
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <div>22/09</div>
                        <div>3 am</div>
                        <div>ICON</div>
                        <div>27&deg;C</div>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>
                    <div className="bg-blue-300 shadow-md rounded-lg p-4 w-36 flex-shrink-0 text-center">
                        <h1>CONTENT</h1>
                    </div>

                    {/* Last div for some extra space */}
                    <div className="w-4 flex-shrink-0"></div>
                </div>
            </div>
        </div>
    );
};

export default ThreeHour;