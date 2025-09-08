import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";



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

            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '100vh',
                    backgroundImage: "url('/images/gradient.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
                    <div className="main-all">
                            <Image src="/images/Homeleft.png" alt="Home" width={375} height={500} className="home-image-left slide-in-left"/>

                            <div className="main-img-txt"> 
                                <Image src="/images/logo-transparent.png" alt="MIND Logo" width={500} height={500} className="logo-image animate-logo"/>
                                    <div className="text-container">
                                        <p className="font-light fade-in-second sub-heading">At the University of Calgary</p>
                                        <h1 className="font-semibold fade-in-third slogan">Moving Minds, One Neuron at a Time</h1>
                                    </div>
                            </div>

                            <Image src="/images/Home.png" alt="Home" width={375} height={500} className="home-image-right slide-in-right"/>
                    </div>
                <Footer />
            </div>
            
        </div>
        
    );
}