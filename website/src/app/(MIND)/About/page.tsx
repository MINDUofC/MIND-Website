import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";


 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "About us",
}

export default function About() {
    return ( 
        <div className={`${montserrat.className}`}>
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '100vh',
                    backgroundImage: "url('/images/light-blue(upsidedown).png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
            <Image src="/images/white-logo-transparent.png" alt="MIND Logo" width={100} height={100} className="absolute right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <h2 className="font-bold drop-shadow-lg fade-in about-us">About Us</h2>
            <div className="ab-container">
                <div className="bg-white p-6 rounded-lg shadow-lg mx-auto text-center fade-in about-us-one pad">
                    <div className="container-one">

                        <p className="font-bold about-us-one-title">Who We Are</p>

                        <p className=" about-us-one-para">
                            Welcome to MIND (Mechatronics Integration
                            of Neural Dynamics) at the University of
                            Calgary, a club focused on brain-computer
                            interfaces (BCIs) and assistive technologies.
                            Inspired by innovators like Neuralink, we aim
                            to transform how technology interacts with
                            the brain to enhance life for those with
                            neuromuscular disabilities. Founded in
                            February 2024 by Nihar Trivedi and Taha
                            Malik, MIND is committed to merging
                            innovation with human benefit.
                            </p>

                        <Image src="/images/OM1.png" alt="MIND Logo" width={325} height={500} className=" about-us-one-image " />
                        </div>
                    </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in about-us-two pad">
                    <div className="container-two">

                        <h2 className=" font-bold p-1 about-us-two-title">The Mission</h2>

                        <p className="about-us-two-para">
                            Our mission is to develop BCIs that can
                            control biomechanical systems
                            (exoskeletons) to aid individuals with
                            neuromuscular disabilities. We strive to
                            create safe and functional technology that
                            assists individuals in executing their intended
                            movements accurately.
                            </p>
                        <Image src="/images/OM2.png" alt="OM2" width={300} height={500} className="about-us-two-image " />
                    </div>
                </div>

            </div>
            
        </div>
        <Footer />
        </div>
        
        )
}