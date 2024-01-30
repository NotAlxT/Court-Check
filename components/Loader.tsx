import React from 'react';
import Hero from '@/img/CourtCheckHero.png'

export default function Loader() {
  return (
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
  );
}
