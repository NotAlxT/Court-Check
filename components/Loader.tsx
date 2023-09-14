import React from 'react';
import '../animation.css'
import Hero from '@/img/CourtCheckHero.png'

export default function Loader() {
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 w-full h-full bg-white z-9 animate-element'>
      <div className='w-[500px] h-[100px] overflow-hidden '>
        <div className=" flex justify-center items-center w-full h-full text-black animate-element1 ">
          <h3 className='font-cursive text-xl font-semibold'>Court Check</h3>
        </div>
        <div className=" flex justify-center items-center w-full h-full animate-element2 ">
          <h3 className='font-cursive text-xl font-semibold text-black'>Developed For Players, By Players</h3>
        </div>
        <div className="  flex justify-center items-center w-full h-full animate-element3 ">
          <h3 className='font-cursive text-xl font-semibold text-black'>Find Your Court</h3>
        </div>
        <div className=" flex justify-center items-center w-full h-full ">
          <img src={Hero.src} alt=''/>
        </div>
      </div>
    </div>
  );
}
