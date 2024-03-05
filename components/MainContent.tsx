import React from 'react';
import About from './About';
import Download from './Download';
import Footer from './Footer';
import Scroller from './Scroller';
import Loader from './Loader';
import Hero2 from './Hero2'

const MainContent: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-full bg-gradient-to-r from-black via-black to-gray-900 ">

            <div className='flex fixed flex-col right-[10%] pt-10 z-30'>
                <Download />
            </div>

            <div className="flex justify-center mt-[10rem]">
                <Loader />
            </div>

            <div >
                <Hero2 />
            </div>


            <div className='pb-10 mt-[10rem]'>
                <Scroller />
            </div>

            <div className='flex justify-center items-center '>
                <About />
            </div>

            <div>
                <Footer />
            </div>


        </div>
    );
}

export default MainContent;