import AppStore from '../img/AppStore.png';
import GoogleStore from '../img/GooglePlay.png'
import Hero from '../img/CourtCheckHero.png'
import React from 'react';
import '../animation.css'

const MainContent: React.FC = () => {
    return (
        <div>
            <div className='absolute h-full w-[50%] bg-black right-0 top-0 opacity-[.2]'>

            </div>
            <div className="introHolder mx-auto relative h-full flex flex-col justify-center items-center ">
                <div className='flex flex-col absolute top-[300px] left-[500px] max-w-700'>
                    <div className='w-[600px] h-[100px] overflow-hidden '>
                        <div className=" flex justify-center items-center w-full h-full text-black animate-element1 ">
                            <h3 className='text-7xl font-bold uppercase text-white tracking-wider mb-4'>Court Check</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element2 ">
                            <h3 className='font-cursive text-xl font-semibold text-black'>Developed For Players, By Players</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element3 ">
                            <img src={Hero.src} alt='' />
                        </div>
                        <div className="introTop flex flex-col justify-center items-center w-full h-full ">
                            <h1 className='text-7xl font-bold leading-14 uppercase text-white tracking-wider mb-3'> Court Check </h1>
                            <h4 className='font-bold leading-14'>Find Your Court</h4>
                        </div>
                    </div>
                </div>
                <div className="introDes absolute top-[400px] left-[700px]">
                    <div className='flex flex-col justify-center items-center'>

                    </div>
                </div>
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