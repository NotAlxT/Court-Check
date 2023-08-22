'use client'

import Hero from '../img/CourtCheckHero.png'
import { Icon } from '@iconify/react';

const Nav = () => {
    return (
        <div className="bg-gradient-to-b from-blue-300 flex p-2 justify-between">

            <img src={Hero.src} alt="Image" className='flex justify-start w-10 rounded-md' />

            <nav className='flex items-end gap-x-5 hover:scale-100'>
                <a href="#" className=" text-orange-500 " ><Icon icon="fluent:home-16-regular" /></a>
                <a href="#" className=" text-orange-500"><Icon icon="mdi:about-circle-outline" /></a>
                <a href="#" className=" text-orange-500"><Icon icon="material-symbols:contact-mail-outline" /></a>
            </nav>
        </div>
    );
}

export default Nav;