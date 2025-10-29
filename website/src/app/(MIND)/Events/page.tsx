import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Events",
}

export default function Events() {
    return (
        <div className={`${montserrat.className}`}>
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '100vh',
                    backgroundImage: "url('/images/allfour.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
            <Image src="/images/white-logo-transparent.png" alt="MIND Logo" width={100} height={100} className="absolute right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />

            <h2 className="font-bold drop-shadow-lg fade-in events">What&apos;s New</h2>

            <div className='img-text'>
                <div className='two-img'>
                    <Image src="/images/Events.png" alt="Events" width={575} height={600} className="slide-in-left events-image"/>
                    <Image src="/images/BCICar.png" alt="car" width={575} height={600} className="slide-in-left events-image"/>
                </div>

                <div className='template flex'>
                    

                    <p className="font-semibold drop-shadow-lg slide-in-left events-title1">Stay Tuned! - Year Round Hiring!</p>

                    <p className="font-light drop-shadow-lg slide-in-right events-para1">
                        We’re expanding the MIND team, and we want you to be part of it! Our mission is bold, and it takes talent from every corner of tech, science, and strategy. Year-round, we’re looking for passionate individuals in engineering (electrical, mechanical, software), neuroscience, and signal processing, as well as creative minds in marketing, business development, event coordination, and sponsorship outreach. Whether you’re excited about designing PCBs, leading workshops, building next-gen neurotech, or shaping our community presence, there’s a place for you to make an impact. Join us and help push the boundaries of brain-computer interfaces and assistive technology, your ideas could power the future.
                        </p>

                        <hr className="w-2/5 border-t-2 my-4 events-line" />

                    <p className="font-semibold drop-shadow-lg slide-in-left events-title2">2025 - 2026 Academic Year Roadmap!</p>

                    <p className="font-light drop-shadow-lg slide-in-right events-para2">
                        Our club has an exciting year ahead! In December 2025, we’ll present at a symposium, highlighting projects like NeuroDrive (BC‑Car), MINDStream v1.0, MINDScope, and our custom 10‑10 EEG headset. Through Winter 2026, we’ll host interactive workshops to share our progress and engage with the community. By May 2026, we’ll wrap up these smaller projects and publish results. Then, in Fall 2026, we begin our biggest challenge yet, the ExoArm Project, a multi‑year effort to create a brain‑controlled assistive exoskeleton for individuals with neuromuscular limitations. These milestones mark our journey from innovation to impact, stay tuned for what’s next!
                    </p>
                </div>
            </div>
            
        </div>
            <Footer />
        </div>

    )
}