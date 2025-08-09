import Link from 'next/link';
import { NavButton } from "@/Components/NavButton";
import Image from 'next/image';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});


export function Header() {
    return(
        <main className={montserrat.className}>
        <header className=" animate-slide bg-backgroun nav-bar ">
            <div className=" justify-between w-full flex-wrap items-center justify-between">
                <div className="font-bold flex ">
                    <Image src="/images/black-logo-transparent.png" alt="MIND Logo" width={75} height={75} className="object-contain w-[75px] sm:w-[35px] md:w-[75px] lg:w-[75px] nav-logo" />
                    <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                        <h1 className=" sm:block text-xl font-bold m-0 mt-1 h-8 hover:bg-gray-200 rounded">
                            MIND
                        </h1>
                    </Link>
                
                    <div className=" sm:gap-6 ml-auto md:gap-8 lg:gap-10 items-center text-sm sm:text-base justify-evenly justify-between items-center flex other-bar ">
                        <div className='hover:bg-gray-200 rounded'> 
                            <NavButton href="/About" label=" &nbsp; About &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'> 
                            <NavButton href="/Team" label=" &nbsp; Team &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'>
                            <NavButton href="/Projects" label=" &nbsp; Projects &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'>
                            <NavButton href="/Events" label=" &nbsp; Events &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'>
                            <NavButton href="/Apply" label=" &nbsp; Apply &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'>
                            <NavButton href="/Sponsors" label=" &nbsp; Sponsors &nbsp; " />
                        </div>
                        <div className='hover:bg-gray-200 rounded'>
                            <NavButton href="/Contact" label=" &nbsp; Contact &nbsp; " />
                        </div>
                        

                    </div>

                </div>
            </div>
        </header>
        </main>
    )
}

