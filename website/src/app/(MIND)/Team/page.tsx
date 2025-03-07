import { Montserrat } from '@next/font/google';

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Our Team",
}

export default function Team() {
    return (
        <div className={`${montserrat.className}`}>
        <div className="bg-light-blue min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
        <div className="relative flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-10 shadow-xl w-[1800px] h-[850px] flex items-center justify-center">
            <img src="/images/logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-5 right-11" style={{ width: '85px', height: 'auto' }} />
            <img src="/images/Team.jpg" alt="Team" className="w-[1700px] h-auto object-contain absolute top-20 right-0 bg-cover bg-center bg-no-repeat fade-in-second" style={{ position: 'absolute', top: '110px', left: '50%', transform: 'translateX(-50%)'}}/>
            <h2 className="font-bold text-7xl drop-shadow-lg fade-in" style={{ position: 'absolute', top: '35px', left: '50%', transform: 'translateX(-50%)', color: '#0047B2'}}>Our Team</h2>
            <h1 className="font-regular text-xl overflow-hidden whitespace-nowrap drop-shadow-lg fade-in-second" style={{ position: 'absolute', top: '745px', left: '51%', transform: 'translateX(-51%)', color: '#0047B2'}}>
                At MIND, our success stems from the dedication and collaboration of our 28-member team, 
                bringing expertise in mechatronics, electrical engineering, software <br /> 
                development, neuroscience, and business to drive impactful neurotechnological solutions. Our executive team leads both social 
                impact initiatives and technical <br />
                projects like the BC-Car. United by a shared vision, we push the 
                boundaries of brain-computer interface technology through innovation and community engagement,<br /> 
                with every member playing a vital role in advancing MIND’s mission.
            </h1>
        </div>
        </div>
        </div>
        </div>
    )
}