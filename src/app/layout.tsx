import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import NavbarMobile from "@/components/NavbarMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairlight",
  description: "Lysdesign som løfter opplevelser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Navbar className="hidden md:block" />
          <NavbarMobile className="md:hidden" />
          <main className="flex-1 px-8 md:px-32 py-4 md:py-8 grow flex flex-col min-h-[calc(100vh-6rem)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
