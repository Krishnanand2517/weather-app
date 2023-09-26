const LocationForm = () => {
    return (
        <div className="px-12 md:px-36 lg:px-56 2xl:px-96 py-10 flex flex-col gap-8 justify-center xl:justify-between text-center">
            <h2 className="text-lg font-semibold md:text-xl lg:text-2xl 2xl:text-3xl md:font-bold">Provide the location</h2>
            <form>
                <div className="mt-8 flex gap-8 md:gap-10 items-center justify-center">
                    <p className="p-2 text-base md:text-lg 2xl:text-xl font-normal md:font-semibold">City</p>
                    <input className="p-2 text-sm md:text-base 2xl:text-lg"
                        type="text"
                        placeholder="e.g. Mumbai"
                        name="city"
                    />
                    <button className="p-2 rounded-full text-xs md:text-sm 2xl:text-base font-bold bg-blue-300 border-solid border-gray-700 border-2">
                        Current Location
                    </button>
                </div>

                <div className="mt-20 flex justify-center items-center">
                    <button className="p-4 rounded-full text-base md:text-lg 2xl:text-xl font-extrabold bg-blue-300 border-solid border-black border-2">
                        Proceed
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LocationForm;