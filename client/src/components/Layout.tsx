import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="App bg-black bg-no-repeat bg-cover">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout; 