let Hero = () => {
    return (
        <div className="flex justify-center items-center w-full h-96 bg-green-200">
            <div className="flex flex-col justify-center items-center w-1/2 bg-white h-96 rounded-lg shadow-lg">
                <div className="w-full h-60 bg-gray-800 rounded-t-lg"></div>
                
                <input className="w-full bg-blue-200 h-20 rounded-xl my-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your text"></input>
            </div>
        </div>
    );
};

export default Hero;
