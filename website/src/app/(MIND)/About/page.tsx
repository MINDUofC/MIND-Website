import { Montserrat } from 'next/font/google';

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
        <div className="bg-light-blue(u-d) w-full full-bgabout h-screen bg-cover bg-center bg-fixed flex relative h-screen full-bg">
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <div className="items-center">
                <h2 className="font-bold text-7xl drop-shadow-lg fade-in about-us">About Us</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mx-auto text-center fade-in flex-col flex about-us-one">
                <img src="/images/OM1.png" alt="MIND Logo" className="object-contain absolute top-0 right-0 about-us-one-image " />

                <p className="font-bold p-1 about-us-one-title">Who We Are</p>

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
                </div>
                

                <div className="bg-white p-6 rounded-lg shadow-lg mx-auto text-center fade-in flex-col flex about-us-two">

                <img src="/images/OM2.png" alt="OM2" className="object-contain absolute top-0 right-0 about-us-two-image " />

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
                </div>

            </div>
        </div>
        </div>
        
        )
}