
import { Montserrat } from 'next/font/google';
import { Button } from '@/Components/ui/button';
import Image from 'next/image';
import Footer from "@/Components/footer";

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
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '90dvh',
                    backgroundImage: "url('/images/grey.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >

            <div className='s-heading'>
                <h2 className="font-extrabold text-7xl slide-in-left drop-shadow-lg sponsors s-head">Our Sponsors</h2>
            </div>

            <div className='s-img-txt'>

                <div className='s-content s-container'>
                    <p className="font-bold text-6xl fade-in-second drop-shadow-lg sponsors-title s-head">Innovate with us. <br /> Become a Sponsor</p>


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
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center fade-in pad s-pad s-marg">
                        <Image src="/images/engg-logo.png" alt="engg-logo" width={375} height={150} className="slide-in-right sponsors-engg" />
                        <Image src="/images/NP.png" alt="NP-logo" width={165} height={165} className="slide-in-right sponsort-nero" />
                    </div>
                </div>



                <div className='s-img-button'>

                    <Image src="/images/Sponsors.png" alt="Sponsors" width={1000} height={950} className=" sponsors-image" />

                    <div className="fade-in-third sponsors-button">
                        <a href="https://drive.google.com/file/d/1f-LujBkqJIGSfUu-CFVlfOggvyKXhgz8/view">
                            <Button className="s-btn">Become a Sponsor</Button>
                        </a>
                    </div>
                </div>

            </div>
            
        </div>
        <Footer />
        </div>
    )
}