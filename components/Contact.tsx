'use client'

import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);
  const [isMessageVisible, setMessageVisble] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_980fem4', 'template_uqgzwci', form.current, '4ENKveL9YGGu3p2w-')
        .then(
          (result) => {
            console.log(result.text);
            console.log('message sent');
            setMessageVisble(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  useEffect(() => {
    if(isMessageVisible) {
      const timer = setTimeout(() => {
        setMessageVisble(false)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isMessageVisible])

  return (
    <>
      <div className="bg-[url('../img/BostonCity.jpg')] bg-cover bg-top w-full h-[100vh] flex justify-center items-center ">
        <div className='flex flex-row flex-wrap h-[80vh] w-[80%] bg-[rgba(0,0,0,.7)] justify-around items-center ml-[150px]'>

          <div className='flex flex-col gap-2'>
            <div className='flex justify-center mb-10'>
              <h1 className='text-2xl text-white'>Contact Us</h1>
            </div>

            <div className="flex flex-row mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" /></svg>
              <div>
                <h1 className='uppercase opacity-60 text-xl text-white'>Email:</h1>
                <p className='text-white'>CourtCheckTeam@Gmail.com</p>
              </div>
            </div>

          </div>
          <div>
            Or Message Us Here
          </div>

          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-10 relative pl-10 pr-10'>
            <div className='flex flex-col'>
              <label className='text-white'>Name</label>
              <input className='rounded text-black p-2' type="text" name="user_name" placeholder='John Doe...'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-white'>Email</label>
              <input className='rounded text-black p-2' type="email" name="user_email"  placeholder='JohnDoe@gmail.com'/>
            </div>

            <div className='flex flex-col w-[400px] h-[200px]'>
              <label className='text-white'>Message</label>
              <textarea className='rounded text-black p-2 h-full' name="message" placeholder='Message...'/>
            </div>

            <button className=' bg-[rgba(36,36,36,0.34)] rounded hover:bg-[rgba(253,253,253,0.7)]' type="submit" value="Send">
              Send
            </button>
            {isMessageVisible && (
              <div className='flex absolute bottom-40 bg-[rgba(0,0,0,0.44)] rounded w-full h-[70px] p-2 justify-center items-center text-center'>
                Thank you! Your Message Has Been Recived!
              </div>
            )}
          </form>

        </div>
      </div>
    </>
  )
}
