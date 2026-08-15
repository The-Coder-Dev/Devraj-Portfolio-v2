import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landing/Navbar";
import LenisProvider from "@/components/landing/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Sharma - Software Engineer",
  description:
    "I turn ideas into modern, scalable, and meaningful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full dark",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-screen flex flex-col p-5 ">
        <LenisProvider>
          <Navbar />
          <div
            className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[url('/noise.gif')]
          z-10"
          />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
