import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/Navbar";


const inter = Inter({ subsets: ['latin'],weight: ['400', '500', '600', '700', '800', '900'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VinsmokeDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 dark:bg-neutral-700  antialiased`}
      > 
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
