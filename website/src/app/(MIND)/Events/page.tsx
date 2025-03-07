import { Montserrat } from '@next/font/google';

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
        <div className="bg-allfour min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '100px', height: 'auto' }} />
            <hr className="w-2/5 border-t-2 mx-auto my-4" style={{position: 'absolute', top: '475px', left: '65%', transform: 'translateX(-50%)', color: '#002960'}} />
            <img src="/images/Events.png" alt="Events" className="object-contain absolute top-0 left-0 slide-in-left" style={{ width: '600px', height: 'auto', position: 'absolute', top: '190px', left: '50%', transform: 'translateX(-145%)' }} />
            <h2 className="font-bold text-7xl drop-shadow-lg fade-in"style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)', color: '#85C7F2' }}>What&apos;s New</h2>

            <p className="font-semibold text-3xl drop-shadow-lg slide-in-left" style={{position: 'absolute', top: '200px', left: '63%', transform: 'translateX(-50%)', color: '#002960' }}>Starting Our First Project</p>

            <p className="font-light text-xl drop-shadow-lg slide-in-right" style={{position: 'absolute', top: '265px', left: '65%', transform: 'translateX(-50%)', color: '#002960'}}>
                You’ve heard of RC cars, but what about a BC car? MIND’s first project, 
                named NeuroDrive, is a brain-controlled car that mirrors your movements—move  
                your hand, and it follows! Using Brain-Computer Interface (BCI) tech, we’re 
                turning brain signals into motion, taking a bold step in neuromuscular research. 
                Wish us luck as we begin our development!
                </p>

            <p className="font-semibold text-3xl drop-shadow-lg slide-in-left" style={{position: 'absolute', top: '515px', left: '62%', transform: 'translateX(-50%)', color: '#002960' }}>Winter 2025 - Upcoming Workshops!</p>

            <p className="font-light text-xl drop-shadow-lg slide-in-right" style={{position: 'absolute', top: '570px', left: '65%', transform: 'translateX(-50%)', color: '#002960'}}>
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