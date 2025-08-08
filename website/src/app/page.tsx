import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export const metadata = {
    title: "MIND",
}

export default function Home() {
    return (
        <div className={`${montserrat.className}`}>

            <div className="bg-plain-grey w-screen h-screen min-h-screen relative">
                <div className='flex'>
                    <div className="main-all">
                            <img src="/images/Homeleft.png" alt="Home" className="home-image-left slide-in-left"/>

                            <div className="main-img-txt"> 
                                <img src="/images/logo-transparent.png" alt="MIND Logo" className="logo-image animate-logo"/>
                                    <div className="text-container">
                                        <p className="font-light fade-in-second sub-heading">At the University of Calgary</p>
                                        <h1 className="font-semibold fade-in-third slogan">Moving Minds, One Neuron at a Time</h1>
                                    </div>
                            </div>

                            <img src="/images/Home.png" alt="Home" className="home-image-right slide-in-right"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}