const Info = () => {
    return (
        <div className="info relative hidden md:block">
            <div className="rounded-full h-4 w-4 flex items-center justify-center bg-blue-500 hover:bg-blue-700 p-2 cursor-pointer">
                <span className="italic text-xs text-white">i</span>
            </div>
            <div className="hidden absolute top-0 left-6 p-2 bg-blue-500 text-white text-xs shadow-lg rounded">
                The shown times are based on your device&apos;s local time, instead of the given city&apos;s local time.
            </div>
        </div>
    );
};

export default Info;