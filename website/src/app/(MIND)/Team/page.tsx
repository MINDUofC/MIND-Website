import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";

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
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '100vh',
                    backgroundImage: "url('/images/light-blue.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
        <div className="flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl team-bg relative">
                
                <h2 className="font-bold drop-shadow-lg fade-in team">Our Team</h2>
                
                <Image src="/images/Team.jpg" alt="Team" width={2800} height={1800} className="fade-in-second team-image"/>
                

                <h1 className="font-regular drop-shadow-lg fade-in-second team-para max-w-[90%]">
                    At MIND, our success stems from the dedication and collaboration of our 35+ member team, bringing expertise in mechatronics, electrical engineering, software
                    development, neuroscience, and business to drive impactful neurotechnological solutions. Our executive team leads both social
                    impact initiatives and technical projects like the BC-Car. United by a shared vision, we push the
                    boundaries of brain-computer interface technology through innovation and community engagement,
                    with every member playing a vital role in advancing MIND&apos;s mission.
                </h1>
                
            </div>
        </div>

        {/* Separator Line */}
        <div className="w-full flex justify-center px-8">
            <hr className="border-t-2 border-white w-[95%]" />
        </div>

        {/* Executive Team Section */}
        <div className="flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl team-bg relative">
                <h2 className="font-bold drop-shadow-lg fade-in team" style={{ fontSize: '3.6rem', marginBottom: '4.25rem' }}>Our Executive Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-8 pb-8">
                    {/* Taha Malik */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/TahaM.jpg" 
                            alt="Taha Malik" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Taha Malik
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Cofounder and Co-President
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Leads engagement, outreach, and neuroscience initiatives for the club.
                        </p>
                    </div>

                    {/* Nihar Trivedi */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/NiharT.jpg" 
                            alt="Nihar Trivedi" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Nihar Trivedi
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Cofounder and Co-President
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Oversees engineering operations and technical project development.
                        </p>
                    </div>

                    {/* Umaiza Hussain */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/UmaizaH.jpg" 
                            alt="Umaiza Hussain" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Umaiza Hussain
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Vice President of Engineering
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Manages engineering projects and coordinates technical team operations.
                        </p>
                    </div>

                    {/* Zeeshan Chaudry */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/ZeeshanC.jpg" 
                            alt="Zeeshan Chaudry" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Zeeshan Chaudry
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Cofounder and Vice President of Neuroscience
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Conducts neuroscience research and presents at academic symposiums.
                        </p>
                    </div>

                    {/* Birinder Doad */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/BirinderD.jpg" 
                            alt="Birinder Doad" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Birinder Doad
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Vice President of Engagement and Outreach
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Directs marketing, events, workshops, and sponsorship initiatives.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Separator Line */}
        <div className="w-full flex justify-center px-8">
            <hr className="border-t-2 border-white w-[95%]" />
        </div>

        {/* Engineering Leads Section */}
        <div className="flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl team-bg relative">
                <h2 className="font-bold drop-shadow-lg fade-in team" style={{ fontSize: '3.6rem', marginBottom: '4.25rem' }}>Engineering Leads</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-8 pb-8">
                    {/* Usama Rasheed */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/UsamaR.jpg" 
                            alt="Usama Rasheed" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Usama Rasheed
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Signal Acquisition and Algorithm Design Engineering Lead
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Spearheads Neurodrive development and algorithm optimization efforts.
                        </p>
                    </div>

                    {/* Devon Calvin */}
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/DevonC.jpg" 
                            alt="Devon Calvin" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            Devon Calvin
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Electrical Systems Engineering Lead
                        </p>
                        <p className="text-sm" style={{ color: '#0047B2' }}>
                            Leads PCB development for MINDScope 16-channel EEG system.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Legacy Executives Section - COMMENTED OUT */}
        {/* Separator Line */}
        
        {/* <div className="w-full flex justify-center px-8">
            <hr className="border-t-2 border-white w-[95%]" />
        </div>
       

        
        <div className="flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl team-bg relative">
                <h2 className="font-bold drop-shadow-lg fade-in team" style={{ fontSize: '3.6rem', marginBottom: '4.25rem' }}>Legacy Executives</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-8 pb-8">
                    Example Legacy Executive - Remove description when moving from active to legacy
                    
                    <div className="flex flex-col items-center text-center max-w-[280px]">
                        <Image 
                            src="/images/personGeneral.jpg" 
                            alt="John Doe" 
                            width={250} 
                            height={250}
                            className="rounded-2xl border-4 border-white mb-4"
                        />
                        <h3 className="font-bold text-xl mb-2" style={{ color: '#0047B2' }}>
                            John Doe
                        </h3>
                        <p className="font-semibold mb-2" style={{ color: '#2563B2' }}>
                            Former Co-President
                        </p>
                    </div>
                   
                *</div>
            </div>
        </div> */}
       

        <Footer />
        </div>
        </div>
        </>
    )
}