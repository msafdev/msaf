import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { GeistSans } from "geist/font/sans";

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
  description:
    "This is Salman's (me!) personal website. I write about tech, programming, and other things I find interesting. I also share my projects and experiences. There is a playground where you can try out free components that I have build.",
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
