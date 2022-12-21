import React from 'react';
import { Link } from 'react-router-dom';

import FooterLogo from '../assets/footer-logo.png';
import TopLeftBorder from '../assets/border-top-left.png';
import BottomLeftBorder from '../assets/border-bottom-left.png';  
import TopRightBorder from '../assets/border-top-right.png';
import BottomRightBorder from '../assets/border-bottom-right.png';
import Facebook from '../assets/facebook-app-symbol.png';
import LinkedIn from '../assets/linkedin.png'; 
import Twitter from '../assets/twitter.png'; 

const Footer: React.FC = () => {
    return (
        <div className="w-screen px-24">
            <footer className="w-full h-fit grid grid-cols-2 footer-bg rounded-t-xl">
                <div className="left relative flex justify-between px-16 py-14" style={{ background: `url("${TopLeftBorder}") left top no-repeat, url("${BottomLeftBorder}") left bottom no-repeat` }}>
                    <div className="w-[70%]">
                        <span className="flex justify-start items-center gap-x-4">
                            <img src={FooterLogo} alt="footerlogo" className="w-10" />
                            <span className="font-extralight text-white uppercase text-xl">programming club</span>
                        </span>

                        <p className="text-white font-light py-6 text-[1.118rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ultrices amet tellus ornare. Faucibus id posuere massa</p>

                        <div className="social-grid flex justify-start items-center gap-x-4">
                            <img src={Facebook} alt="facebook" className="bg-white rounded-md p-1 cursor-pointer transition-colors duration-100 ease-linear hover:bg-[#40E9F1]" />
                            <img src={LinkedIn} alt="linkedin" className="bg-white rounded-md p-1 cursor-pointer transition-colors duration-100 ease-linear hover:bg-[#40E9F1]" />
                            <img src={Twitter} alt="twitter" className="bg-white rounded-md p-1 cursor-pointer transition-colors duration-100 ease-linear hover:bg-[#40E9F1]" />
                        </div>
                    </div>

                    <nav className="w-fit text-white font-light flex flex-col items-start capitalize text-sm gap-y-4">
                        <h3 className="text-white capitalize font-light text-lg">site map</h3>
                        <Link to='/'>about</Link>
                        <Link to='/events'>events</Link>
                        <Link to='/community'>community</Link>
                        <Link to='/login'>login</Link>
                    </nav>
                </div>

                <div className="right relative flex justify-between pr-16 pl-40 py-14" style={{ background: `url("${TopRightBorder}") right top no-repeat, url("${BottomRightBorder}") right bottom no-repeat` }}>
                    <nav className="text-white font-blinker flex flex-col items-start capitalize text-sm gap-y-4">
                        <h3 className="text-white capitalize font-light text-lg font-inter">company</h3>
                        <Link to='/'>help & support</Link>
                        <Link to='/events'>terms & conditions</Link>
                        <Link to='/community'>privacy policy</Link>
                    </nav>

                    <nav className="text-white font-blinker flex flex-col items-start capitalize text-sm gap-y-4">
                        <h3 className="text-white capitalize font-light text-lg font-inter">resource</h3>
                        <Link to='/'>partner</Link>
                        <Link to='/events'>blog</Link>
                        <Link to='/community'>newsletter</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer; 