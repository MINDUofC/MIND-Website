import { Montserrat } from '@next/font/google';

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
        <div className="bg-light-blue(u-d) min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '100px', height: 'auto' }} />
            <div className="items-center">
                <h2 className="font-bold text-7xl drop-shadow-lg fade-in" style={{ position: 'absolute', top: '35px', left: '50%', transform: 'translateX(-50%)', color: '#5C8FFF'}}>About Us</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto text-center fade-in w-[750px] h-[650px]" style={{ position: 'absolute', top: '200px', left: '25%', transform: 'translateX(-50%)'}}>
                <img src="/images/OM1.png" alt="MIND Logo" className="object-contain absolute top-0 right-0 " style={{ top: '265px', right:'210px', width: '350px', height: 'auto' }} />

                <p className="text-lg font-bold text-4xl p-1">Who We Are</p>

                <p className="text-lg">
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
                

                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto text-center fade-in w-[725px] h-[500px]" style={{ position: 'absolute', top: '265px', left: '75%', transform: 'translateX(-50%)'}}>

                <img src="/images/OM2.png" alt="OM2" className="object-contain absolute top-0 right-0 " style={{ top: '185px', right:'210px', width: '300px', height: 'auto' }} />

                <h2 className="text-lg font-bold text-4xl p-1">The Mission</h2>

                <p className="text-lg">
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