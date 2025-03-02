import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export const metadata = {
    title: "MIND",
}

export default function Home() {
    return (
        <main className={montserrat.className}>
            <div className="bg-allfour min-h-screen w-full bg-cover bg-center bg-no-repeat p-8">
                <h2>Home</h2>
                <p>Hello thsi tsadf</p>
            </div>
        </main>
    );
}