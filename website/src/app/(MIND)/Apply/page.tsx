import { Montserrat } from '@next/font/google';
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
        <div className="bg-dark-blue min-h-screen w-full bg-cover bg-center bg-no-repeat relative">
            <img src="/images/white-logo-transparent.png" alt="MIND Logo" className="object-contain absolute top-0 right-0" style={{ width: '100px', height: 'auto' }} />
            <h2 className="font-extrabold text-7xl slide-in-left drop-shadow-lg" style={{position: 'absolute', top: '225px', left: '40%', transform: 'translateX(-150%)', color: '#85C7F2'}}>APPLY</h2>
            <p className="font-regular text-3xl drop-shadow-lg fade-in-second" style={{ position: 'absolute', top: '310px', left: '72%', transform: 'translateX(-185%)', color: '#85C7F2'}}>We receive applications twice a year at the start of the Fall and Winter semesters.</p>
            <div className="absolute fade-in-second" style={{ top: "435px", left: "24%", transform: "translateX(-50%)", color: '#85C7F2'}}>
                <Button variant="ghost" size="lg" style={{color: '#85C7F2'}}>Coming soon.....</Button>
            </div>
        </div>
        </div>
    )
}