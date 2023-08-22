import AppStore from '../img/AppStore.png';
import React from 'react';

const MainContent: React.FC = () => {
    return (
        <div className='h-full w-full'>
            <div className="justify-center items-center flex flex-row h-full w-full ">
                <div className='left flex flex-col w-[50%] h-full'>

                </div>
                <div className='right flex flex-col justify-center items-center w-[50%] h-full'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-2xl mt-10 mb-10 text-black'>Court Check</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={AppStore.src} alt="App Store" className='w-[15rem] pt-10 h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;