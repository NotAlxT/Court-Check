import React from 'react'
import Store from '@/img/AppStore.png'

export default function Download() {
    return (
        <div className="w-[350px] max-h-[30vh] min-h-[270px] bg-custom-gradient bg-[rgb(7,16,45)] flex flex-col p-5 rounded-3xl border border-gray-600 ">
            <span className="small-text font-semibold text-blue-500 text-base mb-2">Download our mobile App!</span>
            <span className="title font-semibold text-white text-[26px] leading-26">Available only on IOS</span>
            <span className="desc text-[13px] text-[rgb(151,153,167)]">Download and start balling today!!</span>
            <div className="buttons flex items-center justify-center  ">
                <div className='bg-[rgba(255,255,255,0)] w-full justify-center items-center flex pt-5'>
                    <a className='flex justify-center items-center' href="https://apps.apple.com/app/id1660990394" target='blank'>
                        <img className='w-[100%]' src={Store.src} alt="App Store" />
                    </a>

                </div>
            </div>
        </div>
    )
}
