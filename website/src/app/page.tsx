import React from 'react';
import { Montserrat } from '@next/font/google';
import localFont from "next/font/local";
const myFont = localFont({ 
    src: "/fonts/hussar-bold.ttf",
    variable: "--font-myFont",
    weight: "700",

 });

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export const metadata = {
    title: "MIND",
}

export default function Home() {
    return (
        <div className={`${montserrat.className} ${myFont.variable}`}>
            <div className="bg-plain-grey min-h-screen w-full bg-cover bg-center bg-no-repeat p-8 relative">
            <img src="/images/logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 animate-logo" style={{ width: '500px', height: 'auto' }} />
            <img src="/images/Home.png" alt="Home" className="absolute right-10 top-1/2 transform -translate-y-3/4 object-contain slide-in-right" style={{ width: '425px', height: 'auto' }} />
            <img src="/images/Homeleft.png" alt="Home" className="absolute left-10 top-1/2 transform -translate-y-3/4 object-contain slide-in-left" style={{ width: '425px', height: 'auto' }} />
            {/* image of big logo */}
                <h2 className="font-extrabold text-7xl fade-in" style={{ position: 'absolute', top: '490px', left: '50%', transform: 'translateX(-145%)', color: '#0047B2'}}>We are </h2>
                <p className="font-light text-2xl fade-in-second" style={{ position: 'absolute', top: '565px', left: '50%', transform: 'translateX(-118%)', color: '#0047B2'}}>At the University of Calgary</p>

                <h1 className="font-semibold text-4xl fade-in-third" style={{ position: 'absolute', top: '700px', left: '50%', transform: 'translateX(-50%)', color: '#0047B2'}}>Moving Minds, One Neuron at a Time</h1>
            </div>
        </div>
        
    );
}