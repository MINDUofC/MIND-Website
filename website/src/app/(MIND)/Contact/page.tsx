import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Footer from "@/Components/footer";

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
            <div
                style={{
                    overflowX: 'hidden',
                    minHeight: '90vh',
                    backgroundImage: "url('/images/grey-blue.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    >
            <Image src="/images/black-logo-transparent.png" alt="MIND Logo"width={100} height={100} className="absolute right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <div className='img-txt'>
                <div className='txt'>
                    <h2 className="font-extrabold fade-in drop-shadow-lg contact-us">Contact us</h2>
                    <p className="font-regular fade-in-second drop-shadow-lg contact-us-sub">For any questions or inquiries, feel free to contact us through any one of our socials, linked below!</p>
                    <div className="click">
                        <a href='https://www.instagram.com/mind.uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
                        <i className="fa-brands fa-instagram text-[65px] fade-in-third insta btn" style={{ color: "#ffffff" }}></i>
                        </a>
                        <a href='https://www.linkedin.com/company/mind-uofc/' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
                        <i className="fa-brands fa-square-linkedin text-[65px] fade-in-third linkedIn btn " style={{ color: "#ffffff" }}></i>
                        </a>
                        <a href='mailto:uofc.mind@gmail.com' style={{ display: 'inline-block', padding: 0, margin: 0 }}>
                        
                        <i className="fa-regular fa-envelope text-[65px] fade-in-third gmail btn" style={{ color: "#ffffff" }}></i>
                        
                        </a>
                    </div>
                </div>
                <Image src="/images/Contact-Us.png" alt="Contact" width={5000} height={5000} className="transform slide-in-right contact-image" />
            </div>
            
        </div>
        <Footer />
        </div>
    
)
}