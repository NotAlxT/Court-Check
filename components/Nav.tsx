'use client'

import Hero from '../img/CourtCheckHero.png'
import { Icon } from '@iconify/react';

const Nav = () => {
    return (
        <div className="bg-gradient-to-b from-blue-300 flex p-2 justify-between">

            <img src={Hero.src} alt="Image" className='flex w-15 rounded-md' />

            <nav className='flex justify-center items-end gap-x-5'>
                <a href="/" className=" hover:scale-125 hover:bg-orange-100 transition ease-in-out rounded-lg" ><Icon  icon="fluent:home-16-regular" color='orange' width={30} height={30} /></a>
                <a href="/aboutUs" className=" hover:scale-125 hover:bg-orange-100 transition ease-in-out rounded-lg"><Icon icon="mdi:about-circle-outline" color='orange' width={30} height={30}/></a>
                <a href="/contact" className=" hover:scale-125 hover:bg-orange-100 transition ease-in-out rounded-lg"><Icon icon="material-symbols:contact-mail-outline" color='orange' width={30} height={30}/></a>
            </nav>
        </div>
    );
}

export default Nav;