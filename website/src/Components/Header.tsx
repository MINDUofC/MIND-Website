"use client";
import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";
import Image from 'next/image';
import { useState } from 'react'; // Import useState hook

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <main className={montserrat.className}>
            <header className="animate-slide bg-backgroun nav-bar">
                <div className="flex justify-between w-full flex-wrap items-center">
                    <div className="font-bold flex items-center">
                        <Image src="/images/black-logo-transparent.png" alt="MIND Logo" width={75} height={75} className="object-contain w-[75px] sm:w-[35px] md:w-[75px] lg:w-[75px] nav-logo" />
                        <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                            <h1 className="sm:block text-xl font-bold m-0 mt-1 h-8 hover:bg-gray-200 rounded btn">
                                MIND
                            </h1>
                        </Link>
                    </div>

                    {/* Hamburger menu button - only visible on small screens */}
                    <button onClick={toggleMenu} className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Desktop menu - hidden on small screens, shown on md and larger */}
                    <div className="hidden md:flex sm:gap-6 ml-auto font-bold md:gap-8 lg:gap-10 items-center text-sm sm:text-base other-bar">
                        <NavButton href="/About" className='hover:bg-gray-200 rounded btn' label=" &nbsp; About &nbsp; " />
                        <NavButton href="/Team" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Team &nbsp; " />
                        <NavButton href="/Projects" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Projects &nbsp; " />
                        <NavButton href="/Events" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Events &nbsp; " />
                        <NavButton href="/Apply" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Apply &nbsp; " />
                        <NavButton href="/Sponsors" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Sponsors &nbsp; " />
                        <NavButton href="/Contact" className='hover:bg-gray-200 rounded btn' label=" &nbsp; Contact &nbsp; " />
                    </div>
                </div>

                {/* Mobile dropdown menu - only visible on small screens when `isMenuOpen` is true */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 font-bold border-t border-gray-200 pt-2">
                        <NavButton href="/About" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; About &nbsp; " />
                        <NavButton href="/Team" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Team &nbsp; " />
                        <NavButton href="/Projects" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Projects &nbsp; " />
                        <NavButton href="/Events" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Events &nbsp; " />
                        <NavButton href="/Apply" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Apply &nbsp; " />
                        <NavButton href="/Sponsors" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Sponsors &nbsp; " />
                        <NavButton href="/Contact" className='hover:bg-gray-200 rounded p-2 block text-center' label=" &nbsp; Contact &nbsp; " />
                    </div>
                )}
            </header>
        </main>
    );
}