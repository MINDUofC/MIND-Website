import { Montserrat } from 'next/font/google';

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
        <div className="bg-allfour full-bgevents relative">
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <hr className="w-2/5 border-t-2 mx-auto my-4 events-line" />
            <img src="/images/Events.png" alt="Events" className="object-contain absolute top-0 left-0 slide-in-left events-image"/>
            <h2 className="font-bold drop-shadow-lg fade-in events">What&apos;s New</h2>

            <p className="font-semibold drop-shadow-lg slide-in-left events-title1">Starting Our First Project</p>

            <p className="font-light drop-shadow-lg slide-in-right events-para1">
                You’ve heard of RC cars, but what about a BC car? MIND’s first project, 
                named NeuroDrive, is a brain-controlled car that mirrors your movements—move  
                your hand, and it follows! Using Brain-Computer Interface (BCI) tech, we’re 
                turning brain signals into motion, taking a bold step in neuromuscular research. 
                Wish us luck as we begin our development!
                </p>

            <p className="font-semibold drop-shadow-lg slide-in-left events-title2">Winter 2025 - Upcoming Workshops!</p>

            <p className="font-light drop-shadow-lg slide-in-right events-para2">
                Kick off 2025 with MIND! This winter semester, we’re bringing you two
                exciting workshops to dive into neurotechnology and signal processing.
                Our first workshop on February 28 will cover Python fundamentals,
                NumPy, SciPy, and an intro to signal processing—perfect for beginners
                and those looking to sharpen their skills! Stay tuned for more details
                and get ready to code, analyze, and explore with us.
            </p>
        </div>
        </div>

    )
}