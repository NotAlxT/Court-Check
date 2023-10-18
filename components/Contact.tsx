import React from 'react'

export default function Contact() {
  return (
    <div className="bg-[url('../img/BostonCity.jpg')] bg-cover bg-top w-full h-[100vh] flex justify-center items-center">
      <div className='flex flex-row h-[80vh] w-[100rem] bg-[rgba(0,0,0,.7)] justify-around items-center'>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-center mb-10'>
            <h1 className='text-2xl'>Contact Us</h1>
          </div>

          <div className="flex flex-row mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" /></svg>
            <div>
              <h1 className='uppercase opacity-60 text-xl text-white'>Email:</h1>
              <p className='text-white'>CourtCheck@Gmail.com</p>
            </div>
          </div>

        </div>

        <div>Get In Touch</div>

      </div>
    </div>
  )
}
