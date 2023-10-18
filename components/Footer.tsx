const Footer = () => {
    return (
        <div className="relative">
            <div className="w-full h-[30vh] bg-[rgba(0,0,0,.9)] flex justify-center">
                <footer className="footer-basic pt-[40px] pb[40px] flex flex-col items-center gap-5">

                    <div className="social pb-[25px] text-center flex flex-row gap-5">
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></a>
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M15.35 5.55a2.9 2.9 0 0 0-2.9 2.846l-.028 1.575a.6.6 0 0 1-.68.584l-1.562-.213c-2.053-.28-4.021-1.225-5.91-2.798c-.597 3.31.57 5.603 3.383 7.372L9.4 16.014a.6.6 0 0 1 .035.992L7.843 18.17c.947.06 1.846.018 2.592-.13c4.718-.942 7.855-4.492 7.855-10.348c0-.478-1.013-2.141-2.94-2.141Zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.668-.646c-.334 1.64-.5 2.353-1.213 3.332c0 7.641-4.697 11.358-9.464 12.309c-3.267.652-8.02-.419-9.38-1.842c.693-.053 3.513-.356 5.143-1.55c-1.38-.91-6.868-4.14-3.261-12.822c1.693 1.977 3.41 3.322 5.15 4.037c1.157.475 1.442.465 1.973.538Z"/></svg></a>
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54c1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"/></svg></a>
                        <a className="text-inherit no-underline opacity-80 hover:opacity-100" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M21.07 16.17c-.34-.93-2.4-1.06-3.36-3.19c-.06-.16-.05-.27.11-.37c.74-.49 1.26-.76 1.56-1.33c.22-.41.25-.89.08-1.33c-.23-.61-.81-1-1.52-1c-.25 0-.45.05-.55.07c.01-.42 0-.86-.04-1.3c-.13-1.53-.67-2.34-1.23-2.98C15.79 4.37 14.48 3 12 3C9.52 3 8.21 4.37 7.88 4.74c-.56.64-1.1 1.45-1.23 2.98c-.03.44-.04.88-.04 1.3c-.11-.03-.3-.07-.55-.07c-.7 0-1.29.38-1.52 1c-.17.43-.14.92.08 1.33c.31.58.82.84 1.56 1.33c.16.11.17.21.11.37c-.97 2.13-3.02 2.26-3.36 3.19c-.15.4-.05.85.32 1.23c.57.59 1.63.77 1.84.91c.17.14.15.56.63.9c.38.26.8.28 1.25.29c1.31.05 1.6.27 2.1.58c.63.39 1.49.92 2.93.92c1.44 0 2.3-.53 2.93-.92c.5-.31.79-.53 2.1-.58c.45-.02.87-.03 1.25-.29c.49-.34.47-.76.63-.9c.21-.14 1.27-.32 1.84-.91c.37-.38.47-.83.32-1.23zm-1.03.53c-.37.39-1.26.5-1.73.82c-.48.42-.4.74-.59.87c-.13.09-.36.1-.72.12c-1.4.05-1.91.31-2.52.69c-1.43.88-2.23.8-2.48.8s-1.05.08-2.47-.81c-.61-.38-1.11-.63-2.52-.69c-.36-.01-.59-.03-.72-.12c-.19-.13-.12-.45-.59-.87c-.48-.32-1.36-.43-1.73-.82c-.06-.06-.11-.14-.12-.15c.07-.1.41-.3.66-.44c.78-.46 1.98-1.14 2.71-2.75c.26-.7.03-1.26-.48-1.59c-1.15-.73-1.13-.76-1.24-.96a.62.62 0 0 1-.03-.5c.12-.32.45-.35.58-.35c.19 0 .18.01 1.57.37c-.02-1.4-.04-1.85.02-2.51c.11-1.31.57-1.93.98-2.4C8.9 5.11 9.99 3.98 12 4c2.01-.02 3.1 1.11 3.37 1.41c.41.47.87 1.09.98 2.4c.06.66.04 1.11.02 2.51c1.4-.36 1.38-.37 1.57-.37c.14 0 .46.03.58.35c.07.17.06.35-.03.5c-.11.2-.09.22-1.23.97c-.51.33-.74.89-.48 1.59c.73 1.61 1.93 2.29 2.71 2.75c.25.15.59.34.66.44c0 .01-.06.09-.11.15z"/></svg></a>
                            </div>
                    <ul className="list-inline p-0 text-center text-base leading-6 mb-0 flex flex-row ">
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">Home</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">About</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="/terms">Terms</a></li>
                        <li className="list-inline-item pl-[10px] pr-[10px] opacity-80 hover:opacity-100 text-white"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright flex mt-10 text-white">CourtCheck © 2023</p>
                </footer>

            </div>
        </div>
    );
}

export default Footer;