// 'use client'

// import React, {useState} from 'react'

// import appSS from '../img/appSS.png'

// export default function Phone() {

// const [counter, setCounter] = useState<number>(0);

//   const handleMouseWheel = (event: React.WheelEvent) => {
//     if (event.deltaY > 0)  {
//       setCounter((prevCounter) => Math.max(prevCounter - 10));
//     } else {
//       setCounter((prevCounter) => Math.min(prevCounter + 10));
//     }
//   };

//   const galleryStyle = {
//     transform: `rotateX(-8deg) rotateY(${counter}deg)`,
//     transformStyle: 'preserve-3d',
//   };

//   const galleryContainerStyle = {
//     transformStyle: 'preserve-3d',
//   };

//     return (
//         <div className='flex h-[700px] w-1/2 justify-center items-center'>
//             <div className="relative w-[200px] h-1/2" style={galleryStyle}
//             onWheel={handleMouseWheel}
//             >
//                 <div className=" w-300 h-200 relative transition-all duration-2000 ease-in-out" style={{transform: 'rotateX(-4deg) rotateY(0deg)',...galleryContainerStyle }} >
//                     <div className="w-full h-full absolute bg-center bg-middle bg-cover " style={{ transform: 'rotateY(0deg) translateZ(400px)'}}>
//                         <img className='rounded-[20px]' src={appSS.src} alt="" />
//                     </div>

//                     <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(72deg) translateZ(400px) rotateX(0deg)'}}>
//                         <img className='rounded-[20px]' src={appSS.src} alt="" />
                        
//                     </div>
                    
//                     <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(144deg) translateZ(400px)'}}>
//                         <img className='rounded-[20px]' src={appSS.src} alt="" />
//                     </div>

//                     <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(216deg) translateZ(400px)'}}>
//                         <img className='rounded-[20px]' src={appSS.src} alt="" />
//                     </div>

//                     <div className="w-full h-full absolute bg-center bg-middle bg-cover" style={{ transform: 'rotateY(288deg) translateZ(400px)'}}>
//                         <img className='rounded-[20px]' src={appSS.src} alt="" />
//                     </div>
//                 </div>
//             </div>

