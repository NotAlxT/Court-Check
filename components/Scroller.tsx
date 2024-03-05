'use client'

import React, { useEffect, useState } from 'react';

import img1 from '@/img/appSS2.png';
import img2 from '@/img/appSS3.png'
import img4 from '@/img/appSS5.png'

interface ScrollerProps { }

export default function Scroller(props: ScrollerProps) {
    let scrollers: NodeListOf<Element> | null = null;

    useEffect(() => {
        // Check if running on the client side
        if (typeof window !== 'undefined') {
            // Access the document object only on the client side
            scrollers = document.querySelectorAll(".scroller");

            // If a user hasn't opted for reduced motion, then we add the animation
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                addAnimation();
            }
        }
    }, []);
    function duplicateAndHide(element:any) {
        const duplicatedItem = element.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        return duplicatedItem;
    }
    
    function addAnimation() {
        if (scrollers) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
    
                const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
                const scrollerContent = Array.from(scrollerInner.children);
    
                for (let i = 0; i < 3; i++) {
                    scrollerContent.forEach((item) => {
                        scrollerInner.appendChild(duplicateAndHide(item));
                    });
                }
            });
        }
    }

    return (
        <div className='flex justify-center items-center h-[700px] bg-[rgba(0,0,0,0.1)] bg-gradient-to-r from-black via-black to-gray-900'>
            <div className="scroller flex justify-center bg-black h-[600px] w-[1200px] overflow-hidden" data-speed="fast">
                <ul className='tag-list scroller__inner gap-5 flex flex-row justify-center items-center h-[80%] w-[80%] mt-10 mb-10 transition-all ease-in-out duration-500'>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0 flex-col  justify-center items-center'>
                        <p className='flex text-white text-xl'>
                            Step 1: Pick A Court
                        </p>
                        <br />
                        <br />
                        <p className='flex text-white text-xl'>
                            Step 2: Check In
                        </p>
                        <br />
                        <br />
                        <p className='flex text-white text-xl'>
                            Step 3: Ball
                        </p>
                        <br />
                        <br />
                        <p className='flex text-white text-xl'>
                            It&apos;s That Easy!
                        </p>
                    </li>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img1.src} alt="" />
                    </li>

                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img2.src} alt="" />
                    </li>

                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img4.src} alt="" />
                    </li>
                </ul>

            </div>
        </div>
    );
}
