import { Montserrat } from 'next/font/google';

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
        <div className="bg-light-blue full-bgteam  relative">
        <div className="relative flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-10 shadow-xl flex items-center justify-center team-bg">
            <img src="/images/logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-5 right-11 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <img src="/images/Team.jpg" alt="Team" className=" object-contain absolute top-20 right-0 bg-cover bg-center bg-no-repeat fade-in-second team-image"/>
            <h2 className="font-bold drop-shadow-lg fade-in team">Our Team</h2>
            <h1 className="font-regular drop-shadow-lg fade-in-second team-para">
                At MIND, our success stems from the dedication and collaboration of our 28-member team, bringing expertise in mechatronics, electrical engineering, software 
                development, neuroscience, and business to drive impactful neurotechnological solutions. Our executive team leads both social 
                impact initiatives and technical projects like the BC-Car. United by a shared vision, we push the 
                boundaries of brain-computer interface technology through innovation and community engagement,
                with every member playing a vital role in advancing MIND’s mission.
            </h1>
        </div>
        </div>
        </div>
        </div>
    )
}