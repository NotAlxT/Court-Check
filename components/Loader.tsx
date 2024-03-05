import React from 'react';
import Hero from '@/img/AboutBg.jpeg'

export default function Loader() {
  return (
    <div className='flex flex-col max-w-[700px] w-[350px] sm:w-full'>
                    <div className='flex flex-col sm:w-[600px] w-[350px] sm:h-[100px] h-[100px] overflow-hidden gap-[40px] sm:gap-[60px]'>
                        <div className=" flex justify-center items-center w-[350px] sm:w-full h-full text-black animate-element1 ">
                            <h3 className='sm:text-7xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600 tracking-wider mb-4 uppercase '>CourtCheck</h3>
                        </div>
                        <div className=" flex justify-center items-center w-[350px] sm:w-full h-full animate-element2 ">
                            <h3 className='font-cursive text-md sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600 '>Developed For Players, By Players</h3>
                        </div>
                        <div className=" flex justify-center items-center mt-5 w-[350px] sm:w-full h-full animate-element3 cursor-none">
                            <img src={Hero.src} alt='Hero' className='rounded-md h-12' />
                        </div>
                        <div className="flex flex-col justify-center items-center w-[350px] sm:w-full h-full">
                            <h1 className='sm:text-7xl text-4xl font-bold leading-14 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#2C819C] via-white to-orange-600  tracking-wider mb-1'>CourtCheck</h1>
                            <div className='flex flex-row'>
                                <h4 className='text-md sm:text-2xl font-bold leading-14 rounded-md italic text-white'>Find Your Court</h4>
                            </div>
                        </div>
                    </div>
                </div>
  );
}
