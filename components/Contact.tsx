import React from 'react'

export default function Contact() {
  return (
    <div className="bg-[url('../img/BostonCity.jpg')] bg-cover bg-top w-full h-[100vh] flex justify-center items-center">
      <div className='flex flex-row h-[80vh] w-[100rem] bg-[rgba(0,0,0,.7)] justify-around items-center'>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-center mb-10'>
            <h1 className='text-2xl'>Contact Us</h1>
          </div>
          
          <div className='flex flex-row mb-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5Z" /></svg>
            <div>
              <h2 className='uppercase opacity-60 text-xl'>Address:</h2>
              <p>123 SomeRandomSt Boston, MA</p>
              02122
            </div>
          </div>

          <div className="flex flex-row mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="white" d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a4.81 4.81 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6.13 6.13 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53ZM176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a4.73 4.73 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210Z" /></svg>
            <div>
              <h1 className='uppercase opacity-60 text-xl'>Phone:</h1>
              <p>+ 555-555-5555</p>
            </div>
          </div>

          <div className="flex flex-row mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" /></svg>
            <div>
              <h1 className='uppercase opacity-60 text-xl'>Email:</h1>
              <p>CourtCheck@Gmail.com</p>
            </div>
          </div>

        </div>

        <div>Get In Touch</div>

      </div>
    </div>
  )
}
