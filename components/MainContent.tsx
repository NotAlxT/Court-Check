import AppStore from '../img/AppStore.png';
import React from 'react';

const MainContent: React.FC = () => {
    return (
        <div>
            <div className="justify-center items-center flex flex-col h-full w-full">
                <div>
                    <h1 className='text-2xl mt-10 mb-10'>Court Check</h1>
                </div>
                <div className=''>
                    <img src={AppStore.src} alt="App Store" className='w-[15rem] pt-10 h-full' />
                </div>
                
            </div>
        </div>
    );
}

export default MainContent;