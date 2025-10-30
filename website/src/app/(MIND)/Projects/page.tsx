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
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title1">NeuroDrive - Machine Learning Powered Brain Controlled Car</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                        After eight months of dedicated development, we’re thrilled to announce that NeuroDrive is nearing completion! This groundbreaking project brings brain-computer interface (BCI) technology to life in a way that’s both innovative and fun. Imagine controlling a car with your mind, no remote required. Our BC-Car concept transforms motor intentions into motion: move your hand, and the car responds in real time. By decoding brain signals and translating them into physical movement, we’re pushing the boundaries of neuromuscular research and human-machine interaction. Stay tuned as we prepare to launch this bold step forward, NeuroDrive is almost here!
                    </p>
                </div>

                <Image src="/images/headset.PNG" alt="Projects" width={400} height={400} className="transform slide-in-right project-image1" />

            </div>

            <div className='Center'>

            <hr className="w-1/2 border-t-2 project-line"/>

            </div>
            
            <div className="p2">
                <div className="pt2">
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title1">
                    MINDStream - EXG Analysis Software
                    </p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                    Introducing MINDStream v1.0 – your complete EXG analysis solution. After months of innovation, we’re proud to announce that MINDStream is officially live and ready to download today. This powerful app is designed for comprehensive EXG signal analysis, giving you full control over brain, heart, and muscle data. Whether it’s EEG, ECG, or EMG, MINDStream lets you analyze and record signals with precision, apply frequency filters, FFT, and PSD for advanced insights, and run structured trials for research and experimentation. It also includes an integrated SLM chatbot, fine-tuned for EXG analysis, to assist with interpretation and workflows. MINDStream v1.0 marks a major milestone in signal processing and neuromuscular research, bringing cutting-edge tools into a single, intuitive platform.{" "}
                    <a
                        href="https://drive.google.com/drive/folders/1_QRY28tUKmzTXfE40aNRZEaNSN1qlqPe?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline hover:text-blue-200 transition"
                    >
                        Download it today
                    </a>{" "}
                    and experience the future of EXG analysis.
                    </p>
                </div>

                <Image src="/images/MINDStream.PNG" alt="Projects" width={435} height={435} className="transform slide-in-right project-image1" />

            </div>

            <div className='Center'>

            <hr className="w-1/2 border-t-2 project-line"/>

            </div>

            <div className='p2'>
                <div className='pt2'>
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title2">MINDScope - Custom EEG Printed Circuit Board</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                    MINDScope is our upcoming custom-designed PCB built to advance EEG and EMG research. Inspired by boards like Neuropawn, Cyton, and FreeEEG32, but with our own unique engineering adjustments, MINDScope offers both wired and wireless connectivity, supporting up to 16 electrode channels with daisy-chain capability for expanded setups. Beyond signal acquisition, it integrates tools to track head position and movement speed, making it an incredibly versatile platform for future mind-controlled projects and advanced neuromuscular applications. MINDScope is designed to deliver precision, flexibility, and scalability for researchers and innovators pushing the boundaries of brain-computer interface technology.
                    </p>
                </div>
                <Image src="/images/PCB.png" alt="Projects" width={400} height={400} className=" transform slide-in-right project-image2" />

            </div>

            <div className='Center'>

            <hr className="w-1/2 border-t-2 project-line"/>

            </div>

            <div className='p2'>
                <div className='pt2'>
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title2">Adjustable EEG 10-10 System Headset</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                    Our mechanical engineers are developing a custom-built 10-10 EEG headset system, adapted from the previous 10-20 design and significantly improved for performance and comfort. This new headset features higher-quality electrodes with smaller diameters for enhanced signal accuracy and reduced interference. By increasing the number of electrode placement points, the 10-10 configuration offers greater spatial resolution compared to the traditional 10-20 system, enabling more precise brain signal mapping. With its refined design and expanded electrode layout, this headset sets a new standard for usability and data quality in EEG-based research and future neurotechnology applications.
                    </p>
                </div>
                <Image src="/images/mechheadset.png" alt="Projects" width={400} height={400} className=" transform slide-in-right project-image2" />

            </div>

             <div className='Center'>

            <hr className="w-1/2 border-t-2 project-line"/>

            </div>

            <div className='p2'>
                <div className='pt2'>
                    <p className="font-semibold drop-shadow-lg slide-in-left project-title2">The Exo Arm</p>

                    <p className="font-light drop-shadow-lg slide-in-left project-para1">
                    Starting in Fall 2026, we’re launching our flagship, multi‑year, multi‑iteration project: a brain‑integrated exoskeleton arm designed to assist elbow flexion and extension, as well as forearm supination and pronation, for individuals whose motor intent is intact but whose neuromuscular systems limit force production (e.g., nerve injury or other impairments). Building on the foundations of our earlier projects, each a deliberate learning step, this effort unites our mechanical, electrical, and software teams into a tightly integrated program. The mechanical team will design and refine a comfortable, modular, and durable wearable arm with precise actuation and safety at its core. The electrical team will develop custom motor‑control PCBs and sensing modules to enable responsive, fail‑safe operation. The software team will bridge the BCI, sensors, and actuators with closed‑loop control, ensuring seamless communication from decoded intent to assisted movement. Together, we aim to translate brain signals into reliable, everyday function, responsibly, iteratively, and in close collaboration with users, pushing the boundaries of assistive technology to make meaningful motion possible.
                    </p>
                </div>
                <Image src="/images/arm.png" alt="Projects" width={400} height={400} className=" transform slide-in-right project-image2" />

            </div>
        </div>
        <Footer />
        </div>

    )
}
