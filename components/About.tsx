import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center w-[80%]  rounded-3xl gap-2">
            <div className="flex justify-center items-center mt-10 mb-10 min-h-[900px] w-[60%] rounded-xl backdrop-blur-[10px]  z-0 ">
                <div className="flex flex-col gap-1 w-[600px] h-[600px] min-h-[500px] min-w-[500px]  overflow-auto justify-center items-center">
                        <div className="up flex flex-row gap-1">
                            <button className="card1 pl-10 pt-12">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="4rem" height="4rem" fill-rule="nonzero" className="instagram"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
                            </button>
                            <button className="card2 pl-10 pt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className='facebook' width="4rem" height="4rem" viewBox="0 0 256 256"><path fill="#1877F2"  d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/></svg>                            </button>
                        </div>
                        <div className="down flex flex-row gap-1">
                            <button className="card3 pl-10 pt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className='linkedin' width="4rem" height="4rem" viewBox="0 0 256 256"><g fill="none" ><rect width="256" height="256" fill="" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>                            </button>
                            <button className="card4 pl-10 pt-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className='appStore' width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="" d="m8.809 14.92l6.11-11.037c.084-.152.168-.302.244-.459c.069-.142.127-.285.165-.44c.08-.326.058-.666-.066-.977a1.511 1.511 0 0 0-.62-.735a1.418 1.418 0 0 0-.922-.193c-.32.043-.613.194-.844.43c-.11.11-.2.235-.283.368c-.092.146-.175.298-.259.45l-.386.697l-.387-.698c-.084-.151-.167-.303-.259-.449a2.168 2.168 0 0 0-.283-.369a1.449 1.449 0 0 0-.844-.429a1.418 1.418 0 0 0-.921.193a1.512 1.512 0 0 0-.62.735a1.586 1.586 0 0 0-.066.977c.038.155.096.298.164.44c.076.157.16.307.244.459l1.248 2.254l-4.862 8.782H2.03c-.168 0-.336 0-.503.01c-.152.009-.3.028-.448.071c-.31.09-.582.28-.778.548A1.581 1.581 0 0 0 .3 17.404c.197.268.468.457.779.548c.148.043.296.062.448.071c.167.01.335.01.503.01h13.097a1.93 1.93 0 0 0 .1-.27c.415-1.416-.616-2.844-2.035-2.844zm-5.696 3.622l-.792 1.5c-.082.156-.165.31-.239.471a2.36 2.36 0 0 0-.16.452a1.7 1.7 0 0 0 .064 1.003c.121.318.334.583.607.755c.272.172.589.242.901.197c.314-.044.6-.198.826-.44c.108-.115.196-.242.278-.378c.09-.15.171-.306.253-.462L6 19.464c-.09-.15-.947-1.47-2.887-.922m20.586-3.006a1.47 1.47 0 0 0-.779-.54a2.031 2.031 0 0 0-.448-.071c-.168-.01-.335-.01-.503-.01h-3.321L14.258 7.1a4.064 4.064 0 0 0-1.076 2.198a4.645 4.645 0 0 0 .546 3l5.274 9.393c.084.15.167.3.259.444c.084.13.174.253.283.364c.231.232.524.38.845.423c.32.042.643-.024.922-.19a1.5 1.5 0 0 0 .621-.726c.125-.307.146-.642.066-.964a2.173 2.173 0 0 0-.165-.434c-.075-.155-.16-.303-.244-.453l-1.216-2.166h1.596c.168 0 .335 0 .503-.009c.152-.009.3-.028.448-.07a1.47 1.47 0 0 0 .78-.541a1.539 1.539 0 0 0 .3-.916a1.539 1.539 0 0 0-.3-.916"/></svg>                            </button>
                        </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 mb-10 min-h-[900px] w-[30%] rounded-xl backdrop-blur-[10px] border  bg-[#000000] z-0">
                <p className="flex w-full h-full text-white font-bold text-md p-10 backdrop-blur-[20px] rounded-xl" >
                    &quot;
                    CourtCheck is a mobile app that helps you find nearby basketball courts, invite friends to play, and request players for pickup games.
                    <br></br><br></br>
                    Our app uses your location to find courts in your area, and we also provide live-feeds on how crowded the courts are.
                    <br></br><br></br>
                    So whether you&apos;re looking for a quick game of hoops with friends or a more competitive pickup game, CourtCheck has you covered.
                    <br></br><br></br>
                    We believe that everyone should have the opportunity to play basketball, and our app makes it easier than ever to find a court and get a game going.
                    <br></br><br></br>
                    With CourtCheck, you can always find a place to play, no matter where you are.
                    <br></br><br></br>
                    Currently, app is available for free only on iOS. The app is constantly being updated with new features and improvements. It is committed to providing a safe and positive environment for basketball players of all levels.
                    &quot;
                </p>
            </div>
        </div>
    );
}

export default About;
