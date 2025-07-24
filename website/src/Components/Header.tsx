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
        <header className=" bg-backgroun ">
            <div className=" ">
                <div className="font-bold flex w-fullmax-w-screen-xl mx-auto ">
                    <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain w-[75px] sm:w-[35px] md:w-[75px] lg:w-[75px]" />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className=" sm:block text-xl font-bold m-0 mt-1 h-8 ">
                            MIND
                        </h1>
                    </Link>

                    <div className="other-bar sm:gap-6 ml-auto md:gap-8 lg:gap-10 items-center text-sm sm:text-base justify-evenly justify-between items-center "> 
                        <NavButton href="/About" label=" &nbsp; About &nbsp; " />

                        <NavButton href="/Team" label=" &nbsp; Team &nbsp; " />

                        <NavButton href="/Projects" label=" &nbsp; Projects &nbsp; " />

                        <NavButton href="/Events" label=" &nbsp; Events &nbsp; " />

                        <NavButton href="/Apply" label=" &nbsp; Apply &nbsp; " />

                        <NavButton href="/Sponsors" label=" &nbsp; Sponsors &nbsp; " />

                        <NavButton href="/Contact" label=" &nbsp; Contact " />

                    </div>

            </div>
            </div>
        </header>
        </main>
    )
}

            // <div className=" h-max justify-between w-fullmax-w-screen-xl mx-auto right-0 px-6 ">
// animate-slide h-max p-2 border-b sticky top-0 right-0 z-20 other-bar
