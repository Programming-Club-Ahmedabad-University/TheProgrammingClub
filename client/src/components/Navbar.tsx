import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../assets/Subtract.png';

const Navbar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-screen pt-6 px-[70px] z-10">
            <nav className="bg-[#2b2b2b] backdrop-filter backdrop-blur-lg bg-opacity-30 flex justify-between items-center py-3 px-9 rounded-[10px]">
                <div className="website-logo flex items-center gap-5">
                    <img src={Logo} alt="logo" className="" />
                    <span className="uppercase text-white text-2xl">programming club</span>
                </div>

                <div className="flex items-center gap-x-16">
                    <NavLink to='/' className={({ isActive }) =>
                        `nav-link ${isActive ? "nav-link-active" : ""}`
                    }>
                        about
                    </NavLink>

                    <NavLink to='/events' className={({ isActive }) =>
                        `nav-link ${isActive ? "nav-link-active" : ""}`
                    }>
                        events
                    </NavLink>

                    <NavLink to='/community' className={({ isActive }) =>
                        `nav-link ${isActive ? "nav-link-active" : ""}`
                    }>
                        community
                    </NavLink>

                    <Link to='/login' className="btn-primary text-xs py-2 px-7">login</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar; 