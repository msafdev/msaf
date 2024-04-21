import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Assets
import "./globals.css";

// Pages
import NotFound from "./not-found";

// Components
import Navbar from "@/components/navbar/nav-bar";
import Footer from "@/components/footer/foo-bar";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={GeistSans.className}>
        <SpeedInsights />
        <main className="flex w-full flex-col bg-background md:min-h-[100svh] ">
          <Navbar />
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
