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
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '90px', height: 'auto' }} />
            <img src="/images/Team.jpg" alt="Team" className="object-contain absolute top-20 right-0 bg-cover bg-center bg-no-repeat" style={{ position: 'absolute', top: '90px', left: '50%', transform: 'translateX(-50%)'}}/>
            <h2 className="font-bold text-7xl" style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', color: '#0047B2'}}>Our Team</h2>
            <h1 className="font-regular text-xl overflow-hidden whitespace-nowrap" style={{ position: 'absolute', top: '800px', left: '50%', transform: 'translateX(-50%)', color: '#0047B2'}}>
                At MIND, our success is built on the dedication and
                collaboration of our talented team members.
                Currently made up of 28 members, together, we
                bring diverse skills from mechatronics,<br /> electrical
                engineering, software development, neuroscience,
                and business to advance our mission of creating
                impactful neurotechnological solutions. Our
                executive team ranges from <br /> members running the
                clubs social impact and engagement to actively
                developing our projects like the BC-Car. This page
                showcases our entire team, a collective of passionate
                individuals <br /> committed to pushing the boundaries of
                brain-computer interface technology. From
                technical innovation to community outreach, every
                member plays a vital role in driving MIND forward,
                <br /> united by our shared vision and ambition.
            </h1>
        </div>
        </div>
    )
}