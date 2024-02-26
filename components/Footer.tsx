const Footer = () => {
    return (
        <div className="relative">
            <div className="w-full h-[30vh] bg-[rgba(0,0,0,.9)] flex justify-center items-end pb-10 bg-gradient-to-r from-black via-black to-gray-900 ">
                <footer className="footer-basic pt-[40px] pb[40px] flex flex-col items-center gap-1">
                    <ul className="list-inline p-0 text-center text-base leading-6  flex flex-row ">
                        <li className="list-inline-item pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">Home</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">About</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="/terms">Terms</a></li>
                        <li className="list-inline-item pl-[10px] opacity-80 hover:opacity-100 text-white"><a href="/terms">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright flex mt-10 text-white">CourtCheck © 2023</p>
                </footer>

            </div>
        </div>
    );
}

export default Footer;