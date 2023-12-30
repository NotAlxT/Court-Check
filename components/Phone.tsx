'use client'

import React, { useEffect, useState } from 'react';

import appSS from '../img/appSS.png';

type TransformStyle = 'preserve-3d' | 'flat';

export default function Phone() {

    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + .1)
    }
    
    const decrementCounter = () => {
        setCounter((prevCounter) => Math.max(prevCounter - 10, 0))
    }

    useEffect(() => {
        const timer= setInterval(() => {
            incrementCounter()
        }, 10)

        return () => clearInterval(timer)
    }, [])

    const galleryStyle = {
        transformStyle: 'preserve-3d' as TransformStyle,
        transform: `rotateX(0deg) rotateY(${counter}deg)`
    };

    const galleryContainerStyle = {
        transform: 'rotateX(2deg) rotateY(0deg) preserve-3d',
        transformStyle: 'preserve-3d' as TransformStyle,
    };

    return (
        <div className='flex h-[700px] w-1/2 justify-center items-center'>
            <div className="relative w-[200px] h-1/2" style={{...galleryStyle}}>
                <div className="flex w-300 h-200 relative transition-all duration-2000 ease-in-out " style={{...galleryContainerStyle}} >
                    <div className="w-[250px] h-full absolute bg-center bg-middle bg-cover " style={{ transform: 'rotateY(0deg) translateZ(400px)' }}>
                        <img className='flex justify-center items-center rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className='bg-[#1d1d1d] w-[250px] h-[543px] absolute bg-center bg-middle bg-cover rounded-[20px] flex justify-center items-center' style={{ transform: 'rotateY(0deg) translateZ(390px)' }}> </div>

                    <div className="w-[250px] h-full absolute bg-center bg-middle bg-cover " style={{ transform: 'rotateY(72deg) translateZ(400px) rotateX(0deg)' }}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />

                    </div>

                    <div className='bg-[#1d1d1d] w-[250px] h-[543px] absolute bg-center bg-middle bg-cover rounded-[20px] flex justify-center items-center' style={{ transform: 'rotateY(72deg) translateZ(390px)' }}> </div>

                    <div className="w-[250px] h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(144deg) translateZ(400px)' }}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className='bg-[#1d1d1d] w-[250px] h-[543px] absolute bg-center bg-middle bg-cover rounded-[20px] flex justify-center items-center' style={{ transform: 'rotateY(144deg) translateZ(390px)' }}> </div>

                    <div className="w-[250px] h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(216deg) translateZ(400px)' }}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className='bg-[#1d1d1d] w-[250px] h-[543px] absolute bg-center bg-middle bg-cover rounded-[20px] flex justify-center items-center' style={{ transform: 'rotateY(216deg) translateZ(390px)' }}> </div>

                    <div className="w-[250px] h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(288deg) translateZ(400px)' }}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className='bg-[#1d1d1d] w-[250px] h-[543px] absolute bg-center bg-middle bg-cover rounded-[20px] flex justify-center items-center' style={{ transform: 'rotateY(288deg) translateZ(390px)' }}> </div>
                </div>
            </div>
        </div>
    )
}
