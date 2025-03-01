import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from"@/Components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | MIND",
    default: "MIND",
  },
  applicationName: "MIND",
  description: "MIND Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={"${geistSans.variable} ${geistMono.variable} antialiased bg-allfour bg-cover bg-center min-h-screen"}
      >
        <div className="mx-auto w-full max-w-7xl">
          <Header />
          <div className="px-4 py-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

