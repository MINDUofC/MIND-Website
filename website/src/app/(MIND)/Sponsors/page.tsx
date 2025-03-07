
import { Montserrat } from '@next/font/google';
import { Button } from '@/Components/ui/button';

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Sponsors",
}

export default function Sponsors() {
    return (
        <div className={`${montserrat.className}`}>
        <div className="bg-grey min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
            <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '100px', height: 'auto' }} />
            <img src="/images/Sponsors.png" alt="Sponsors" className="object-contain slide-in-right-delay" style={{position: 'absolute', top: '250px', left: '107%', transform: 'translateX(-150%)', width: '500px', height: 'auto' }} />
            <img src="/images/engg-logo.png" alt="engg-logo" className="object-contain slide-in-right" style={{position: 'absolute', top: '10px', left: '70%', transform: 'translateX(-150%)', width: '375px', height: 'auto' }} />
            <img src="/images/NP.png" alt="NP-logo" className="object-contain slide-in-right" style={{position: 'absolute', top: '10px', left: '75%', transform: 'translateX(-150%)', width: '165px', height: 'auto' }} />
            <h2 className="font-extrabold text-7xl slide-in-left drop-shadow-lg" style={{position: 'absolute', top: '45px', left: '50%', transform: 'translateX(-150%)', color: '#FFFFFF'}}>Our Sponsors</h2>
            <p className="font-bold text-6xl fade-in-second drop-shadow-lg" style={{position: 'absolute', top: '200px', left: '50%', transform: 'translateX(-131%)', color: '#FFFFFF'}}>Innovate with us. <br /> Become a Sponsor</p>


            <p className="font-regular text-xl fade-in-third" style={{position: 'absolute', top: '350px', left: '50%', transform: 'translateX(-80%)', color: '#FFFFFF'}}>
                MIND is focused on developing brain-computer interfaces and
                integrating mechatronics with neurology to create innovative
                solutions for individuals with neuromuscular deficiencies. We would
                love to work with more organizations as we are actively seeking
                partners who share our vision of advancing human mobility and
                neural technology.
            </p>

            <p className="font-regular text-xl fade-in-third" style={{position: 'absolute', top: '480px', left: '50%', transform: 'translateX(-80%)', color: '#FFFFFF'}}>By sponsoring MIND, your organization will empower our research
            and development efforts, helping students create transformative
            solutions. Your support will be recognized on this page, at events, in
            promotional materials, and more.
            </p>

            <p className="font-regular text-xl fade-in-third" style={{position: 'absolute', top: '580px', left: '50%', transform: 'translateX(-219%)', color: '#FFFFFF'}}>Interested in becoming a sponsor?</p>

            <p className="font-regular text-xl fade-in-third" style={{position: 'absolute', top: '630px', left: '50%', transform: 'translateX(-85%)', color: '#FFFFFF'}}>Contact us at <b><u>uofc.mind@gmail.com</u></b>. Together, we can move
            minds, one neuron at a time.
            </p>

            <div className="absolute fade-in-third" style={{ top: "620px", left: "81%", transform: "translateX(-50%)",}}>
                <a href="https://drive.google.com/file/d/1f-LujBkqJIGSfUu-CFVlfOggvyKXhgz8/view">
                    <Button variant="default" size="lg">Become a Sponsor</Button>
                </a>
            </div>

        </div>
        </div>
    )
}