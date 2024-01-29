'use client'

import Hero from '../img/CourtCheckHero.png'

const Nav = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className=" flex flex-col w-[10%] h-full fixed justify-between z-10 backdrop-blur-[10px]">

            <div className="flex h-full flex-col border-r shadow-xl">

                <div className=" h-full text-white-600 flex flex-col items-center gap-10 pt-10 ">

                    <div className='flex justify-center pt-20 pb-20 r'>
                        <img src={Hero.src} alt="Image" className='rounded-md w-[70px] cursor-pointer' onClick={handleScrollToTop} />
                    </div>

                    <a href="/" >
                        <div className="group flex justify-center relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full transform transition-transform hover:scale-100">

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15v3m10-5.796v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715" /></svg>

                            </div>
                            <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Home
                            </span>
                        </div>
                    </a>

                    <a href="/team">
                        <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-100">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
                                </svg>

                            </div>

                            <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Team
                            </span>
                        </div>
                    </a>
                    <a href="/contact">
                        <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25zM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zM9.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM5.261 7.714a1.357 1.357 0 1 0 0-2.714a1.357 1.357 0 0 0 0 2.714m-1.403.678A.858.858 0 0 0 3 9.25a1.67 1.67 0 0 0 1.265 1.62l.053.014c.62.155 1.267.155 1.886 0l.054-.013a1.67 1.67 0 0 0 1.265-1.62a.858.858 0 0 0-.858-.859z" /></svg>
                            </div>
                            <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Contact
                            </span>
                        </div>
                    </a>
                    <a href="/terms" >
                        <div className="group relative px-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-500 flex justify-center hover:bg-[rgba(36,36,36,0.56)] rounded-md w-[50px]">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 transform transition-transform hover:scale-100">

                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M17.978 7.993a1.978 1.978 0 1 1-3.956 0a1.978 1.978 0 0 1 3.956 0m-2.118 3.975c.967 0 1.75.783 1.75 1.75v10.59a1.75 1.75 0 1 1-3.5 0v-10.59c0-.967.784-1.75 1.75-1.75"/><path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/></g></svg>


                            </div>

                            <span className="absolute top-[3px] left-[100%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white text-black px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
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