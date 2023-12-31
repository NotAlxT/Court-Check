const About = () => {
    return (
        <div className="flex justify-center mt-10 min-h-[500px] min-w-[80rem] overflow">
            <div className="flex w-[80rem] min-h-[500px] overflow-auto bg-[rgba(0,0,0,0.074)] justify-center items-center rounded-xl backdrop-blur-[10px] border">
                <p className="w-[90%] text-white font-bold text-xl leading-[3rem]">
                &quot;
                    CourtCheck is a mobile app that helps you find nearby basketball courts, invite friends to play, and request players for pickup games. Our app uses your location to find courts in your area, and we also provide live-feeds on how crowded the courts are. So whether you&apos;re looking for a quick game of hoops with friends or a more competitive pickup game, CourtCheck has you covered.
                    We believe that everyone should have the opportunity to play basketball, and our app makes it easier than ever to find a court and get a game going. With CourtCheck, you can always find a place to play, no matter where you are.
                    Currently, app is available for free only on iOS. The app is constantly being updated with new features and improvements. It is committed to providing a safe and positive environment for basketball players of all levels.
                &quot;
                </p>

            </div>
        </div>
    );
}

export default About;
