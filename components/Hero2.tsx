import React from 'react'

export default function Hero2() {
    return (
        <div className='flex flex-row flex-wrap justify-around items-end '>
            <div className='flex flex-col relative h-20 w-[400px] mt-[15%] mb-[100px]'>
                <div className='flex flex-col'>
                    <div className=' flex w-[200px] h-[60px] relative z-1'>
                        <div className='w-[20px] h-[20px] absolute rounded-full bg-orange-500 transform origin-center animate-ball'> </div>
                        <div className='w-[20px] h-[4px] absolute rounded-full bg-[rgba(255,255,255,0.9)] top-[62px] blur-[1px] transform origin-center animate-shadow z-[-1]'> </div>
                    </div>
                </div>
                <br />
                <h1 className='bold text-4xl text-white'>Pick-Up Games.</h1>
                <br />
                <h1 className='bold text-white'>Made Easy.</h1>
            </div>

            <div className="flex reflect w-[300px] h-[300px] rounded-full border bg-[rgb(255,255,255)] z-0 bg-[url('../img/AboutBg.jpeg')] bg-cover bg-center">

            </div>

        </div>
    )
}
