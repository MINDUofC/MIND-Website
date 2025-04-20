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
        <header className="animate-slide bg-background h-max p-2 border-b sticky top-0 right-0 z-20 other-bar gap-2 p-2 hover:bg-gray-200 rounded mx-2 hover:underline">
            <div className="flex h-max justify-between w-fullmax-w-screen-xl mx-auto right-0 px-6 other-bar gap-2 p-2 hover:bg-gray-200 rounded mx-2 hover:underline">
                <div className="flex items-center gap-3 font-bold other-bar gap-2 p-2 hover:bg-gray-200 rounded mx-2 hover:underline">
                    <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain w-[75px] sm:w-[35px] md:w-[75px] lg:w-[75px]" />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className=" sm:block text-xl font-bold m-0 mt-1 h-8 ">
                            MIND
                        </h1>
                    </Link>
                </div>

                <div className=" font-bold flex ml-auto"> 
                    {/* gap-6 sm:gap-6 ml-auto md:gap-8 lg:gap-10 items-center text-sm sm:text-base */}

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