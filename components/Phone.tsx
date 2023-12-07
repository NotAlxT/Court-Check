import React from 'react'

import appSS from '../img/appSS.png'

export default function Phone() {
    return (
        <div className='flex justify-center items-center mb-10 flex-col w-[1000px] '>
            <div className='flex gap-10 flex-row  rounded-[10px] p-10 min-w-full overflow-x-hidden overflow-y-hidden '>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(212,212,212)] rounded-[20px] flex justify-center items-end ">
                        <div className=''>
                            <div className="camera w-[80px] bg-black absolute h-[20px] top-[4%] right-[30%] rounded-[25px]"></div>
                        </div>
                        <div className="messageContainer bg-white w-[185px] h-[340px] rounded-b-[20px] flex flex-col gap-2 pl-1 pt-2 pr-1 relative" >
                            <div className='flex h-[30px] w-[30%] bg-[rgb(231,231,231)] rounded-xl justify-center items-center text-black font-semibold'> Yo?</div>
                            <div className='flex h-[30px] w-[50%] bg-[rgb(231,231,231)] rounded-xl justify-center items-center text-black font-semibold'> Ball up?</div>
                            <div className='flex self-end h-[30px] w-[40%] bg-[rgb(82,144,255)] rounded-xl justify-center items-center text-white font-semibold'> Yeah!</div>
                            <div className='flex h-[30px] w-[70%] bg-[rgb(231,231,231)] rounded-xl justify-center items-center text-black font-semibold'> CourtCheck?</div>
                            <div className='flex self-end h-[30px] w-[60%] bg-[rgb(82,144,255)] rounded-xl justify-center items-center text-white font-semibold'> Checked In!</div>
                            <div className='flex self-end h-[30px] w-[100%] bg-[rgb(82,144,255)] rounded-xl justify-center items-center text-white font-semibold'> 5 v 5 @ Peter&apos;s Court</div>
                        </div>
                        <div className='phoneBlkLine absolute bottom-2 rounded-xl w-[100px] h-[5px] bg-black'>

                        </div>
                    </div>
                </div>

                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
                <div className="phoneContainer w-[190px] h-[406px] bg-black rounded-[20px] relative flex justify-center items-center">
                    <div className="screen w-[186px] h-[400px] bg-[rgb(255,255,255)] rounded-[20px] flex justify-center items-end relative">
                        <div className='w-[100%] h-[100%]'>
                            <img className='rounded-[20px]' src={appSS.src} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
