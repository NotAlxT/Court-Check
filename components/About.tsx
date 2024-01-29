
const About = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mt-10 min-h-[1000px] w-[70%] rounded-xl backdrop-blur-[10px] border border-gray-500 bg-[rgb(255,255,255)] z-0 bg-[url('../img/AboutBg.jpeg')] bg-cover bg-center">
                <div className="flex w-[90%] h-full overflow-auto justify-center items-center">
                    <p className="flex w-full h-full text-black font-bold text-2xl leading-[3rem] p-10 backdrop-blur-[20px] text-center" >
                        &quot;
                        CourtCheck is a mobile app that helps you find nearby basketball courts, invite friends to play, and request players for pickup games. Our app uses your location to find courts in your area, and we also provide live-feeds on how crowded the courts are. So whether you&apos;re looking for a quick game of hoops with friends or a more competitive pickup game, CourtCheck has you covered.
                        We believe that everyone should have the opportunity to play basketball, and our app makes it easier than ever to find a court and get a game going. With CourtCheck, you can always find a place to play, no matter where you are.
                        Currently, app is available for free only on iOS. The app is constantly being updated with new features and improvements. It is committed to providing a safe and positive environment for basketball players of all levels.
                        &quot;
                    </p>

                </div>
            </div>
        </div>
    );
}

export default About;
