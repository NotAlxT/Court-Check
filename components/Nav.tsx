'use client'

import Hero from '../img/CourtCheckHero.png'

const Nav = () => {
    return (
        <div className=" flex w-full p-2 fixed justify-between z-10">

            <img src={Hero.src} alt="Image" className='flex w-15 rounded-md' />

            <div className="flex flex-col">
                <div className="border text-orange-600 py-3 flex gap-1 shadow-xl rounded-md ">
                    <a href="/" ><div className="group relative px-4 cursor-pointer">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-125">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                                <path stroke="black" d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
                            </svg>
                        </div>
                        <span className="absolute -bottom-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Home
                        </span>
                    </div> 
                    </a>
                    
                    <a href="/team">
                        <div className="group relative px-4 cursor-pointer ">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-125">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="black" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
                                </svg>

                            </div>

                            <span className="absolute -bottom-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Team
                            </span>
                        </div>
                    </a>
                    <a href="/contact">
                        <div className="group relative px-4 cursor-pointer ">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H2V5h20v14M21 6h-7v5h7V6m-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1M9 12a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m0-4a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 8.59c0-2.5-3.97-3.59-6-3.59s-6 1.09-6 3.59V18h12v-1.41M5.5 16c.72-.5 2.2-1 3.5-1c1.3 0 2.77.5 3.5 1h-7Z" /></svg>
                            </div>
                            <span className="absolute -bottom-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Contact
                            </span>
                        </div>
                    </a>
                    <a href="/terms" >
                        <div className="group relative px-4 cursor-pointer">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-125">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                                    <path fill="black" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
                                </svg>

                            </div>

                            <span className="absolute -bottom-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Terms
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Nav;