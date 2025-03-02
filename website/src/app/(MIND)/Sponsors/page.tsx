import { Montserrat } from '@next/font/google';

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
            <h2>Sponsors</h2>
        </div>
        </div>
    )
}