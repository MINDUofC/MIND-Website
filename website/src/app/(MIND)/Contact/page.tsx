import { Montserrat } from '@next/font/google';

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Contact us",
}

export default function Contact() {
    return (
        <div className={`${montserrat.className}`}>
        <div className="bg-grey-blue min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
            <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '100px', height: 'auto' }} />
            <img src="/images/Contact Us.png" alt="Contact" className="object-contain absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-2/3 slide-in-right" style={{ width: '500px', height: 'auto' }} />
            <h2 className="font-extrabold text-7xl fade-in drop-shadow-lg" style={{ position: 'absolute', top: '200px', left: '60%', transform: 'translateX(-185%)', color: '#002960'}}>Contact us</h2>
            <p className="font-regular text-3xl fade-in-second drop-shadow-lg" style={{ position: 'absolute', top: '310px', left: '72%', transform: 'translateX(-185%)', color: '#002960'}}>For any questions or inquiries, feel free to contact us through any one of our socials, linked below!</p>
            <a href='https://www.instagram.com/mind.uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/insta.png" alt="Instagram" className="fade-in-third"style={{ position: 'absolute', top: '435px', left: '60%', transform: 'translateX(-950%)', width: '75px', height: '75px' }} />
            </a>
            <a href='https://www.linkedin.com/company/mind-uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/linkedin.png" alt="Linkedin" className="fade-in-third" style={{ position: 'absolute', top: '435px', left: '60%', transform: 'translateX(-750%)', width: '75px', height: '75px' }} />
            </a>
            <a href='mailto:uofc.mind@gmail.com' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/gmail.png" alt="Gmail" className="fade-in-third" style={{ position: 'absolute', top: '435px', left: '60%', transform: 'translateX(-550%)', width: '75px', height: '75px' }} />
            </a>

        </div>
        </div>
    
)
}