import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Projects",
}

export default function Projects() {
    return (
        <div className={`${montserrat.className}`}>
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '100vh',
                    backgroundImage: "url('/images/blue.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
            <Image src="/images/white-logo-transparent.png" alt="MIND Logo" width={100} height={100} className="absolute right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <h2 className="font-extrabold fade-in project">Our Projects</h2>

            <div className='p1'>

                <div className='pt1'>
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title1">Our First Project: The BCI - NeuroDrive</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                        Within the next year and a half, we’re excited to develop our very own brain-computer interface that accurately interprets a user’s 
                        motor intentions—with a fun twist: the BC-Car! You’ve heard of RC cars, but what about a BC car? MIND’s first project, NeuroDrive,
                        is a brain-controlled car that mirrors your movements—move your hand, and it follows! By harnessing Brain-Computer Interface (BCI) technology, 
                        we’re transforming brain signals into motion, taking a bold step in neuromuscular research. Wish us luck as we embark on this groundbreaking journey!
                    </p>
                </div>

                <Image src="/images/headset.PNG" alt="Projects" width={260} height={350} className="transform slide-in-right project-image1" />

            </div>

            <div className='Center'>

            <hr className="w-1/2 border-t-2 project-line"/>

            </div>

            <div className='p2'>
                <div className='pt2'>
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title2">The Exo Arm</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para2">
                    Once our BCI is completed, we aim to develop a prototype exoskeleton arm to enhance movements like elbow flexion, extension, supination, and pronation. 
                    The mechanical team will design and build the arm, while the electrical team focuses on developing the PCBs for motor control. Our software team will 
                    integrate the arm with the PCBs and computers, ensuring seamless communication between the hardware and BCI. This collaborative effort will push the 
                    boundaries of assistive technology.
                    </p>
                </div>
                <Image src="/images/ARM.png" alt="Projects" width={4000} height={4000} className=" transform slide-in-right project-image2" />

            </div>
            <Footer />
        </div>
        </div>

    )
}
