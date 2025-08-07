import { Montserrat } from 'next/font/google';
import { Button } from '@/Components/ui/button';

 const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export const metadata = {
    title: "Apply",
}

export default function Apply() {
    return (
        <div className={`${montserrat.className}`}>
        <div className="bg-dark-blue full-bgapply">
            <img src="/images/white-logo-transparent.png" alt="MIND logo" className=" absolute right-0 w-[75px] sm:w-[75px] md:w-[75px] lg:w-[100px]" />
            <div className="apply-box">
                <h2 className="font-extrabold text-7xl slide-in-left drop-shadow-lg Apply">APPLY</h2>
                <p className="font-regular text-3xl drop-shadow-lg fade-in-second sub-apply">We receive applications twice a year at the start of the Fall and Winter semesters.</p>
                <div className="fade-in-second apply-button">
                    <Button variant="ghost" size="lg" style={{color: '#85C7F2'}}>Coming soon.....</Button>
                </div>
            </div>
        </div>
        </div>
    )
}