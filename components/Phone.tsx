'use client'

import React, {useState} from 'react'

import appSS from '../img/appSS.png'

export default function Phone() {

const [counter, setCounter] = useState<number>(0);

  const handleMouseWheel = (event: React.WheelEvent) => {
    if (event.deltaY > 0)  {
      setCounter((prevCounter) => Math.max(prevCounter - 10));
    } else {
      setCounter((prevCounter) => Math.min(prevCounter + 10));
    }
  };

  const galleryStyle = {
    transform: `rotateX(-8deg) rotateY(${counter}deg)`,
    transformStyle: 'preserve-3d',
  };

  const galleryContainerStyle = {
    transformStyle: 'preserve-3d',
  };

    return (
        <div className='flex h-[700px] w-1/2 justify-center items-center'>
            <div className="relative w-[200px] h-1/2" style={galleryStyle} 
            onWheel={handleMouseWheel}
            >
                <div className=" w-300 h-200 relative transition-all duration-2000 ease-in-out" style={{transform: 'rotateX(-4deg) rotateY(0deg)',...galleryContainerStyle }} >
                    <div className="w-full h-full absolute bg-center bg-middle bg-cover " style={{ transform: 'rotateY(0deg) translateZ(400px)'}}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(72deg) translateZ(400px) rotateX(0deg)'}}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                        
                    </div>
                    
                    <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(144deg) translateZ(400px)'}}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(216deg) translateZ(400px)'}}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>

                    <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(288deg) translateZ(400px)'}}>
                        <img className='rounded-[20px]' src={appSS.src} alt="" />
                    </div>
                </div>
            </div>




            {/* <div className='flex gap-10 flex-row  rounded-[10px] p-10 min-w-full overflow-x-hidden overflow-y-hidden '>
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
            </div> */}
        </div>
    )
}
