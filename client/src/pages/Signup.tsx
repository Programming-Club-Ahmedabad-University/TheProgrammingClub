import React from 'react';

import SignUpForm from '../components/signup/SignUpForm';

import Grids from '../assets/Grids.png'; 

const SignUp: React.FC = () => {
    React.useEffect(() => {
        const app: HTMLElement = document.querySelector(".App") as HTMLElement;
        app.style.backgroundImage = `url("${Grids}")`; 
    }, []);

    return (
        <div className="w-screen h-fit py-44 flex items-center">
            <div className="w-full flex flex-col items-center">
                <h1 className="uppercase font-bold text-[#40E9F1] text-[5.5rem] heading tracking-wider">sign up</h1>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp; 