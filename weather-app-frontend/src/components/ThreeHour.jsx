import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ThreeHourCard from './ThreeHourCard';

const ThreeHour = ({
    dateArray, timeArray, iconArray, tempArray
}) => {
    useEffect(() => {
        const scrollContainer = document.getElementById('scroll-container');
        const leftGradient = document.getElementById('left-gradient');
        const rightGradient = document.getElementById('right-gradient');

        leftGradient.classList.add('opacity-0');
        rightGradient.classList.add('opacity-100');

        scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollLeft === 0) {
                leftGradient.classList.add('opacity-0');
                leftGradient.classList.remove('opacity-100');
            } else {
                leftGradient.classList.add('opacity-100');
                leftGradient.classList.remove('opacity-0');
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 3) {
                rightGradient.classList.add('opacity-0');
                rightGradient.classList.remove('opacity-100');
            } else {
                rightGradient.classList.add('opacity-100');
                rightGradient.classList.remove('opacity-0');
            }
        });

        return () => {
            scrollContainer.removeEventListener('scroll', () => { });
        };
    }, []);

    return (
        <div className="my-10">
            <h2 className="mx-12 md:mx-36 lg:mx-56 2xl:mx-96 text-2xl lg:text-3xl font-bold">24-hour Forecast</h2>
            <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-5 flex items-center justify-center relative">
                <div className="absolute left-0 top-0 w-6 sm:w-20 ml-12 md:ml-36 lg:ml-56 2xl:ml-96 h-full bg-gradient-to-r from-sky-light to-transparent transition-opacity duration-800" id="left-gradient"></div>
                <div className="absolute right-0 top-0 w-12 sm:w-28 mr-12 md:mr-36 lg:mr-56 2xl:mr-96 h-full bg-gradient-to-l from-sky-light to-transparent transition-opacity duration-800" id="right-gradient"></div>

                <div className="w-full overflow-x-auto" id="scroll-container">
                    <div className="flex p-4 gap-4">
                        {dateArray.map((_, i) => (
                            <ThreeHourCard
                                key={i}
                                date={dateArray[i]}
                                time={timeArray[i]}
                                icon={iconArray[i]}
                                temperature={tempArray[i]}
                            />
                        ))}

                        {/* Last div for some extra space */}
                        <div className="w-2 flex-shrink-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ThreeHour.propTypes = {
    dateArray: PropTypes.array.isRequired,
    timeArray: PropTypes.array.isRequired,
    iconArray: PropTypes.array.isRequired,
    tempArray: PropTypes.array.isRequired
};

export default ThreeHour;