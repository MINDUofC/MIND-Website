import React from 'react';
import Head from 'next/head';
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
        <>
            <Head>
                <title>Responsive Split Layout</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        <div className={`${montserrat.className}`}>

            <div className="bg-plain-grey w-screen h-screen relative min-h-screen">
                <div className="flex">
                    <div className="container">
                        <img src="/images/Homeleft.png" alt="Home" className="home-image-left slide-in-left"/>

                        {/* New Wrapper for the central content */}
                        <div className="center-content-wrapper"> 
                            <img src="/images/logo-transparent.png" alt="MIND Logo" className="logo-image animate-logo"/>
                            <h2 className="mind-logo-text">MIND</h2>
                            <div className="text-container">
                            <h2 className="font-extrabold fade-in main-heading">We are </h2>
                            <p className="font-light fade-in-second sub-heading">At the University of Calgary</p>
                            <h1 className="font-semibold fade-in-third slogan">Moving Minds, One Neuron at a Time</h1>
                            </div>
                        </div>

                        <img src="/images/Home.png" alt="Home" className="home-image-right slide-in-right"/>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}


