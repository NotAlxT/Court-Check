'use client'

import React, { useEffect, useState } from 'react';

import img1 from '@/img/appSS.png';

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

    function addAnimation() {
        if (scrollers) {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", "true");

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }

    return (
        <div className='flex justify-center items-center h-[700px] bg-[rgba(0,0,0,0.1)]'>
            <div className= "scroller flex justify-center bg-black h-[600px] w-[900px] border" data-speed="slow">
                <ul className='tag-list scroller__inner gap-5 flex flex-row justify-center items-center h-[80%] w-[80%] mt-10 mb-10 transition-all ease-in-out duration-500'>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img1.src} alt="" />
                    </li>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img1.src} alt="" />
                    </li>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img1.src} alt="" />
                    </li>
                    <li className='slide flex h-full w-[300px] hover:scale-105 transition-all ease-in-out duration-500 hover:z-10 z-0'>
                        <img className='rounded-lg' src={img1.src} alt="" />
                    </li>
                </ul>
                
            </div>
        </div>
    );
}
