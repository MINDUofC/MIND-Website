
import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";

export function Header() {
    return(
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/" label="Home" />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1 ">
                            MIND
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">

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
    )
}