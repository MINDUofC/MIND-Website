import type { Metadata } from "next";
import "./globals.css";
import { Header } from"@/Components/Header"

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
        className={'${geistSans.variable} ${geistMono.variable} antialiased'}
      >
        <div className="">
          <Header />
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

