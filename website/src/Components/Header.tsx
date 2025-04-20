import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export function Header() {
    return(
        <main className={montserrat.className}>
        <header className="animate-slide bg-background h-max p-2 border-b sticky top-0 z-20 other-bar">
            <div className="flex h-max items-center justify-between w-full other-bar">
                <div className="flex items-center gap-2 font-bold other-bar">
                    <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain w-[75px] sm:w-[35px] md:w-[75px] lg:w-[75px]" />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className=" sm:block text-xl font-bold m-0 mt-1 h-8 ">
                            MIND
                        </h1>
                    </Link>
                </div>

                <div className=" ${myFont.variable} font-bold other-bar">

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