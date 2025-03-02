import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";
import localFont from "next/font/local";
const myFont = localFont({ 
    src: "/fonts/hussar-bold.ttf",
    variable: "--font-myFont",
    weight: "700",

 });

import { Montserrat } from '@next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export function Header() {
    return(
        <main className={montserrat.className}>
        <header className="animate-slide bg-background h-max p-2 border-b sticky top-0 z-20">
            <div className="flex h-max items-center justify-between w-full">
                <div className="flex items-center gap-2 font-bold">
                    <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain" style={{ width: '75px', height: 'auto' }} />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1 h-8 ">
                            MIND
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center ${myFont.variable} font-bold gap-2">

                    <NavButton href="/About" label="About" />

                    <NavButton href="/Team" label="Team" />

                    <NavButton href="/Projects" label="Projects" />

                    <NavButton href="/Events" label="Events" />

                    <NavButton href="/Apply" label="Apply" />

                    <NavButton href="/Sponsors" label="Sponsors" />

                    <NavButton href="/Contact" label="Contact" />


                </div>

            </div>
        </header>
        </main>
    )
}