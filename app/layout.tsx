import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

// Pages
import NotFound from "./not-found";

// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Salman",
  description: "Salman's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="min-h-screen w-full flex flex-col text-foreground bg-background">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
