import React from 'react'
import Store from '@/img/AppStore.png'
import QR from '@/img/CourtCheckQR.png'

export default function Download() {

    return (
        <div className="flex flex-col w-[120px] h-[60px] rounded-3xl ">
            <div className='flex justify-center items-center rounded-full w-full h-full text-sm font-semibold text-black transition-all group'>

                <a className='flex justify-center items-center w-full h-full group-hover:border-[1px] group-hover:border-orange-500 group-hover:bg-black bg-white rounded-full duration-500' href="https://apps.apple.com/app/id1660990394" target='blank'>
                    <svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" /></svg>
                    <span className='flex text-black group-hover:text-white'>App Store</span>
                </a>

                <div className="absolute top-[6.5rem] right-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-500">
                    <div className="flex flex-row min-w-[400px] min-h-[200px] rounded-3xl bg-white p-10  ">
                        <img className='w-[200px]' src={QR.src} alt="QR Code" />
                        <div className='flex flex-col justify-center items-center p-[10px] flex-wrap w-[200px] gap-5'>
                            <span className="title font-semibold text-black text-[20px] ">Available only on IOS</span>
                            <span className="desc text-[13px] text-[rgb(151,153,167)]">Download and find your court today!!</span>
                            <a className='flex justify-center items-center bg-black w-[100px] h-[25px] rounded-md hover:scale-150 transition-all ease-in-out duration-500' href="https://apps.apple.com/app/id1660990394" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 315" fill='white'><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" /></svg>
                                <span className='flex text-white '>App Store</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
