
import { Montserrat } from 'next/font/google';
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
        <div className="bg-grey full-bgsponsors ">


            <div className='s-heading'>
                <h2 className="font-extrabold text-7xl slide-in-left drop-shadow-lg sponsors">Our Sponsors</h2>
                <img src="/images/engg-logo.png" alt="engg-logo" className=" slide-in-right sponsors-engg" />
                <img src="/images/NP.png" alt="NP-logo" className="slide-in-right sponsort-nero" />
            </div>

            <div className='s-img-txt'>

                <div className='s-content'>
                    <p className="font-bold text-6xl fade-in-second drop-shadow-lg sponsors-title">Innovate with us. <br /> Become a Sponsor</p>


                    <p className="font-regular text-xl fade-in-third sponsors-para">
                        MIND is focused on developing brain-computer interfaces and
                        integrating mechatronics with neurology to create innovative
                        solutions for individuals with neuromuscular deficiencies. We would
                        love to work with more organizations as we are actively seeking
                        partners who share our vision of advancing human mobility and
                        neural technology. <br/> By sponsoring MIND, your organization will 
                        empower our research and development efforts, helping students create 
                        transformative solutions. Your support will be recognized on this page, 
                        at events, in promotional materials, and more. <br/> Interested in becoming 
                        a sponsor? <br/> Contact us at <b><u>uofc.mind@gmail.com</u></b>. Together, 
                        we can move minds, one neuron at a time.
                    </p>
                </div>

                <div className='s-img-button'>

                    <img src="/images/Sponsors.png" alt="Sponsors" className=" sponsors-image" />

                    <div className="fade-in-third sponsors-button">
                        <a href="https://drive.google.com/file/d/1f-LujBkqJIGSfUu-CFVlfOggvyKXhgz8/view">
                            <Button className="s-button "variant="ghost" size="lg" style={{color: '#FFFFFF'}}>Become a Sponsor</Button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}