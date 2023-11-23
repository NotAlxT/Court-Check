const Footer = () => {
    return (
        <div className="relative">
            <div className="w-full h-[30vh] bg-[rgba(0,0,0,.9)] flex justify-center">
                <footer className="footer-basic pt-[40px] pb[40px] flex flex-col items-center gap-5">

                    <div className="social pb-[25px] text-center flex flex-row gap-5">
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="https://www.instagram.com/court_check/?fbclid=IwAR3o-pDQkpKy0-GiATLRhiZi7i6X9TPB2bMc3-vZK_Zr43fUrOzOH2YXVIk" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></a>
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="https://www.facebook.com/profile.php?id=61553710550399" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54c1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"/></svg></a>
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="https://www.linkedin.com/company/courtcheck/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> </a>
                         </div>
                    <ul className="list-inline p-0 text-center text-base leading-6 mb-0 flex flex-row ">
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">Home</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">About</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="/terms">Terms</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="/terms">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright flex mt-10 text-white">CourtCheck © 2023</p>
                </footer>

            </div>
        </div>
    );
}

export default Footer;