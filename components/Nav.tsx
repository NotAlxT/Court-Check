'use client'

import Hero from '../img/AboutBg.jpeg'
import { useEffect, useState } from 'react';

const Nav = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div>
            <div className=" flex flex-col w-[10%] h-full fixed justify-between z-10 backdrop-blur-[10px] bg-gradient-to-l from-transparent via-transparent to-gray-900 invisible md:visible">

                <div className="flex h-full flex-col border-r shadow-xl">

                    <div className=" h-full text-white-600 flex flex-col items-center gap-10 pt-10 ">

                        <div className='flex justify-center pt-20 pb-20 r'>
                            <img src={Hero.src} alt="Image" className='rounded-md w-[70px] cursor-pointer' onClick={handleScrollToTop} />
                        </div>

                        <a href="/" >
                            <div className="group flex justify-center relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full transform transition-transform hover:scale-100 group">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path className='group-hover:stroke-white' fill="none" stroke="gray" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715" /></svg>

                                </div>
                                <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Home
                                </span>
                            </div>
                        </a>

                        <a href="/team">
                            <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full  transform transition-transform hover:scale-100 group">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32 " >
                                        <path className='group-hover:stroke-white' fill="none" stroke="gray" stroke-linecap="round" stroke-width="1.5" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
                                    </svg>

                                </div>

                                <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Team
                                </span>
                            </div>
                        </a>
                        <a href="/contact">
                            <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full transform transition-transform hover:scale-100 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 2048 2048">
                                        <path className='group-hover:fill-white' fill='gray' d="M740 1077q65 33 117 81t90 108t57 128t20 142H896q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149H0q0-73 20-141t57-128t89-108t118-82q-73-54-114-136t-42-173q0-79 30-149t83-122t122-82t149-31q79 0 149 30t122 83t82 122t31 149q0 91-41 173t-115 136M256 768q0 53 20 99t55 81t81 55t100 21q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99m1792-384v128h-896V384zm-896 512h896v128h-896zm0 512h896v128h-896z" />
                                    </svg>
                                </div>
                                <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Contact
                                </span>
                            </div>
                        </a>
                        <a href="/terms" >
                            <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full  transform transition-transform hover:scale-100 group">

                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">
                                        <path className='group-hover:fill-white' fill="gray" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 8v2h1V8zm0 4v5h1v-5z" />
                                    </svg>

                                </div>

                                <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                    Terms
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex md:hidden relative'>

                <button className={`fixed top-10 left-10 w-[2rem] h-[2rem] z-10 hover:stroke-black toggle-button animate-pulse ${open ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 28 24">
                        <path fill="white" d="M5.216 11.998a2.608 2.608 0 1 1-5.217 0a2.608 2.608 0 0 1 5.217 0m0-9.39a2.608 2.608 0 1 1-5.217 0a2.608 2.608 0 0 1 5.217 0m0 18.781a2.608 2.608 0 1 1-5.217 0a2.608 2.608 0 0 1 5.217 0M9.794 0h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22m0 9.39h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22m0 9.391h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22" />
                    </svg>
                </button>

                <div className={`fixed flex flex-col w-full h-[100%] z-50 bg-white justify-center gap-20 ${open ? 'visible' : 'invisible'}`}>

                    <div className='flex justify-end relative right-10 top-[-100px] animate-pulse' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g stroke="black" stroke-linecap="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0" /><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3" /></path><path fill="none" stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0" /></path></g></svg>
                    </div>

                    <div className='flex relative left-10 '>
                        <a href="/" className='flex flex-row items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path className='group-hover:stroke-white' fill="none" stroke="gray" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715" /></svg>

                            <h1 className='text-black flex'>
                                Home
                            </h1>
                        </a>
                    </div>

                    <div className='flex relative left-10 items-center'>
                        <a href="/team" className='flex flex-row items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32 " >
                                <path className='group-hover:stroke-white' fill="none" stroke="gray" stroke-linecap="round" stroke-width="1.5" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
                            </svg>
                            <h1 className='text-black flex'>
                                Team
                            </h1>
                        </a>

                    </div>
                    <div className='flex relative left-10'>
                        <a href="/contact" className='flex flex-row items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 2048 2048">
                                <path className='group-hover:fill-white' fill='gray' d="M740 1077q65 33 117 81t90 108t57 128t20 142H896q0-79-30-149t-83-122t-122-82t-149-31q-79 0-149 30t-122 83t-82 122t-31 149H0q0-73 20-141t57-128t89-108t118-82q-73-54-114-136t-42-173q0-79 30-149t83-122t122-82t149-31q79 0 149 30t122 83t82 122t31 149q0 91-41 173t-115 136M256 768q0 53 20 99t55 81t81 55t100 21q52 0 99-20t81-55t55-81t21-100q0-52-20-99t-55-81t-82-55t-99-21q-53 0-99 20t-81 55t-55 82t-21 99m1792-384v128h-896V384zm-896 512h896v128h-896zm0 512h896v128h-896z" />
                            </svg>
                            <h1 className='text-black flex'>
                                Contact
                            </h1>
                        </a>
                    </div>
                    <div className='flex relative left-10'>
                        <a href="/terms" className='flex flex-row items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">
                                <path className='group-hover:fill-white' fill="gray" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 8v2h1V8zm0 4v5h1v-5z" />
                            </svg>
                            <h1 className='text-black flex'>
                                Terms & Policy
                            </h1>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Nav;