import AppStore from '../img/AppStore.png';
import GoogleStore from '../img/GooglePlay.png'
import Hero from '../img/CourtCheckHero.png'
import React from 'react';
import '../animation.css'
import About from './About';
import Store from '@/img/AppStore.png'
import Download from './Download';
import Phone from './Phone';
import Gif from '@/img/BasketballGif.gif'
import Footer from './Footer';

const MainContent: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-[1000px] bg-[url('../img/BasketballGif.gif')] bg-contain bg-no-repeat bg-right ">

            <div className='fixed flex flex-col right-0 pr-20 pt-10 z-30'>
                <Download />
            </div>

            <div className="flex flex-row justify-center items-center mt-[10rem]">

                <div className='flex flex-col max-w-700'>
                    <div className='w-[600px] h-[100px] overflow-hidden '>
                        <div className=" flex justify-center items-center w-full h-full text-black animate-element1 ">
                            <h3 className='text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600 tracking-wider mb-4 uppercase '>CourtCheck</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element2 ">
                            <h3 className='font-cursive text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600 '>Developed For Players, By Players</h3>
                        </div>
                        <div className=" flex justify-center items-center w-full h-full animate-element3 cursor-none">
                            <img src={Hero.src} alt='Hero' className='rounded-md' />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full h-full ">
                            <h1 className='text-7xl font-bold leading-14 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600  tracking-wider mb-1'>CourtCheck</h1>
                            <div className='flex flex-row'>
                                <h4 className='font-bold leading-14  pl-9 pr-9 rounded-md italic text-white'>Find Your Court</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col relative left-[20rem] h-20 w-full mt-[15%] mb-[100px]'>
                <div className='flex flex-col'>
                    <div className=' flex w-[200px] h-[60px] relative z-1'>
                        <div className='w-[20px] h-[20px] absolute rounded-full bg-orange-500 transform origin-center animate-ball'> </div>
                        <div className='w-[20px] h-[4px] absolute rounded-full bg-[rgba(255,255,255,0.9)] top-[62px] blur-[1px] transform origin-center animate-shadow z-[-1]'> </div>
                    </div>
                </div>
                <br />
                <h1 className='bold text-4xl'>Pick-Up Games.</h1>
                <br />
                <h1 className='bold'>Made Easy.</h1>
                
            </div>
            <div>

                <div className='flex justify-center bg-[rgba(255,255,255,0)] w-full mt-[100px] mb-10 pt-10 pb-10'>
                    <About />

                </div>

                {/* <div className=' flex justify-center items-center mb-[100px]'> */}
                {/* <Phone /> */}
                {/* </div> */}


                <Footer />
            </div>

        </div>
    );
}

export default MainContent;