import React from 'react'
// sm:justify-center
export default function Hero2() {
    return (
        <div className='flex flex-row flex-wrap sm:justify-around justify-end items-end w-[85%] ml-10 sm:ml-0 sm:mt-20 mb-20'>
            <div className='flex flex-col relative h-20 w-[400px] mt-[50%] sm:mt-[15%] ml-20 sm:pl-10'>
                <div className='flex flex-col'>
                    <div className=' flex w-[200px] h-[60px] relative z-1'>
                        <div className='w-[20px] h-[20px] absolute rounded-full bg-orange-500 transform origin-center animate-ball'> </div>
                        <div className='w-[20px] h-[1px] absolute rounded-full bg-[rgba(255,255,255,0.9)] top-[62px] blur-[1px] transform origin-center animate-shadow z-[1]'> </div>
                    </div>
                </div>
                <div>
                    <br />
                    <h1 className='bold text-md sm:text-4xl text-white'>Pick-Up Games.</h1>
                    <br />
                    <h1 className='bold text-white'>Made Easy.</h1>
                </div>
            </div>

            <div className="sm:mt-32 hidden sm:flex reflect w-[300px] h-[300px] ml-20 rounded-full border bg-[rgb(255,255,255)] z-0 bg-[url('../img/AboutBg.jpeg')] bg-cover bg-center">

            </div>

        </div>
    )
}
