import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import standard Inter and Space Grotesk
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Shinka Agency | Digital Evolution",
  description: "Transforming businesses through digital innovation.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-primary selection:text-white antialiased`}>
         <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
         <Providers>
           <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
           </div>
         </Providers>
      </body>
    </html>
  );
}
