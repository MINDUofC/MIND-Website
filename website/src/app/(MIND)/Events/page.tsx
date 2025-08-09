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
                    

                    <p className="font-semibold drop-shadow-lg slide-in-left events-title1">Stay Tuned! - Summer Hiring!</p>

                    <p className="font-light drop-shadow-lg slide-in-right events-para1">
                        We’re growing the MIND team! This summer, we’re opening roles for
                        PCB designers (electrical engineering), upcoming workshop directors,
                        marketing creatives, event coordinators, sponsorship liaisons, and more.
                        Whether you’re into tech, strategy, or outreach, there’s a place for you
                        to contribute.
                        </p>

                        <hr className="w-2/5 border-t-2 my-4 events-line" />

                    <p className="font-semibold drop-shadow-lg slide-in-left events-title2">Two Projects Coming Soon!</p>

                    <p className="font-light drop-shadow-lg slide-in-right events-para2">
                        This summer, we’re pushing the limits of neurotechnology with two
                        exciting projects nearing completion. First up is NeuroDrive, our brain-
                        controlled car—only the final integration phase remains. Alongside it,
                        we’re developing BCI-powered games that respond to eye blinks and
                        relaxation signals, turning brain activity into gameplay. Stay tuned as
                        we wrap up both by August!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
        </div>

    )
}