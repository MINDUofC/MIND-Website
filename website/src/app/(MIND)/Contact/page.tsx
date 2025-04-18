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
        <div className="bg-grey-blue min-h-screen w-full full-bgcontact bg-cover bg-center bg-no-repeat relative">
            <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <img src="/images/Contact Us.png" alt="Contact" className="object-contain absolute transform slide-in-right contact-image" />
            <h2 className="font-extrabold fade-in drop-shadow-lg contact-us">Contact us</h2>
            <p className="font-regular fade-in-second drop-shadow-lg contact-us-sub">For any questions or inquiries, feel free to contact us through any one of our socials, linked below!</p>
            <a href='https://www.instagram.com/mind.uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/insta.png" alt="Instagram" className="fade-in-third insta" />
            </a>
            <a href='https://www.linkedin.com/company/mind-uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/linkedin.png" alt="Linkedin" className="fade-in-third linkedIn" />
            </a>
            <a href='mailto:uofc.mind@gmail.com' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
            <img src="/images/gmail.png" alt="Gmail" className="fade-in-third gmail" />
            </a>

        </div>
        </div>
    
)
}