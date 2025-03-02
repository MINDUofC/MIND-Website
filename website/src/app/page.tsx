import React from 'react';
import localFont from "next/font/local";

const hussarbold = localFont({
    src: "/fonts/hussar-bold.woff2",
});

export const metadata = {
    title: "MIND",
}

export default function Home() {
    return (
        <div className="bg-allfour min-h-screen w-full bg-cover bg-center bg-no-repeat p-8">
            <h2>Home</h2>
            <p>Hello thsi tsadf</p>
        </div>
    );
}