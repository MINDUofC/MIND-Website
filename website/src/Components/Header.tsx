import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export function Header() {
    return (
        <main className={montserrat.className}>
            <header className="animate-slide bg-background p-2 border-b sticky top-0 z-20">
                <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-6">

                    {/* Left Section: Logo + Title */}
                    <div className="flex items-center gap-3">
                        <img src="/images/black-logo-transparent.png" alt="MIND Logo" className="object-contain w-[35px] sm:w-[40px] md:w-[60px] lg:w-[75px]"/>
                        <Link href="/" className="flex items-center" title="Home">
                            <h1 className="text-xl font-bold mt-1">MIND</h1>
                        </Link>
                    </div>

                    {/* Right Section: Nav Buttons */}
                    <nav className="flex items-center gap-6 text-sm sm:text-base font-semibold">
                        <NavButton href="/About" label="About" />
                        <NavButton href="/Team" label="Team" />
                        <NavButton href="/Projects" label="Projects" />
                        <NavButton href="/Events" label="Events" />
                        <NavButton href="/Apply" label="Apply" />
                        <NavButton href="/Sponsors" label="Sponsors" />
                        <NavButton href="/Contact" label="Contact" />
                    </nav>
                </div>
            </header>
        </main>
    );
}
