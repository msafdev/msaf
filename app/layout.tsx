import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { Montserrat } from "next/font/google";

// Assets
import "./globals.css";

// Pages
import NotFound from "./not-found";

// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Salman",
  description: "Salman's personal website",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={montserrat.className}>
        <SpeedInsights />
        <main className="flex min-h-[100svh] w-full flex-col bg-background text-foreground">
          <Navbar />
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
