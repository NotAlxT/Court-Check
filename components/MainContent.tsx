import AppStore from '../img/AppStore.png';
import GoogleStore from '../img/GooglePlay.png'
import Hero from '../img/CourtCheckHero.png'
import React from 'react';
import '../animation.css'
import About from './About';
import Store from '@/img/AppStore.png'
import Download from './Download';
import Phone from './Phone';

const MainContent: React.FC = () => {
    return (
        <div className="flex flex-col  w-full h-full">
            {/* bg-[url('../img/Basketballbg2.jpg')] bg-cover bg-center */}
            <div className="mx-auto relative h-[30vh] w-full flex flex-row justify-around items-center mt-[10rem]">
                <div className='flex flex-col max-w-700'>
                    <div className='w-[600px] h-[100px] overflow-hidden '>
                        <div className=" flex justify-center items-center w-full h-full text-black animate-element1 ">
                            <h3 className='text-7xl font-bold text-[#2C819C] tracking-wider mb-4 uppercase cursor-none'>CourtCheck</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element2 ">
                            <h3 className='font-cursive text-xl font-semibold text-orange-600 cursor-none'>Developed For Players, By Players</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element3 cursor-none">
                            <img src={Hero.src} alt='' />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full h-full ">
                            <h1 className='text-7xl font-bold leading-14 uppercase text-[#2C819C] tracking-wider mb-3 cursor-none'>CourtCheck</h1>
                            <h4 className='font-bold leading-14 text-orange-600'>Find Your Court</h4>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[400px] left-[700px]">
                    <div className='flex flex-col justify-center items-center'>

                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Download />
                </div>
            </div>





            <div className='bg-[rgba(255,255,255,0)] w-full mt-10 mb-10 pt-10 pb-10'>
                <About />
            </div>

            <div className=' flex justify-center items-center mb-[100px]'>
                <Phone />
            </div>

        </div>
    );
}

export default MainContent;


{/* <div className='h-full w-full'>
            <div className="justify-center items-center flex flex-row h-full w-full ">
                <div className='left flex flex-col w-[50%] h-full  bg-black'>

                </div>
                <div className='right flex flex-col justify-center items-center w-[50%] h-full bg-#ffffff'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl mt-10 mb-10 text-black'>Court Check</h1>
                    </div>
                    <img src={AppStore.src} alt="App Store" className='w-[15rem] pt-10 h-full' />
                        <img src={GoogleStore.src} alt="App Store" className='w-[18rem] pt-10 h-full' />
                </div>
            </div>
        </div> */}