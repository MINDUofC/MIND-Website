import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Our Team",
}

export default function Team() {
    return (
            <>
            <Head>
                <title>Responsive Split Layout</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        <div className={`${montserrat.className}`}>
        <div className="bg-light-blue full-bgteam">
        <div className="flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl team-bg relative">
                
                <h2 className="font-bold drop-shadow-lg fade-in team">Our Team</h2>
                
                <Image src="/images/Team.jpg" alt="Team" width={2800} height={1800} className="fade-in-second team-image"/>
                

                <h1 className="font-regular drop-shadow-lg fade-in-second team-para max-w-[90%]">
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
        </>
    )
}