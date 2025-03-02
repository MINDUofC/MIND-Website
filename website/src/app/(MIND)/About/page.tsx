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
                <h2 className="text-bold text-6xl" style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)'}}>About us</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto text-center" style={{ position: 'absolute', top: '200px', left: '25%', transform: 'translateX(-50%)'}}>

                <p className="text-lg">Who We Are</p>

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

                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto text-center" style={{ position: 'absolute', top: '200px', left: '75%', transform: 'translateX(-50%)'}}>

                <h2 className="text-lg">The Mission</h2>

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