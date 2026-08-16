import type { Metadata } from "next";
import { Diphylleia, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landing/Navbar";
import LenisProvider from "@/components/landing/LenisProvider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });



const diphylleia = Diphylleia({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-mono"
})


export const metadata: Metadata = {
  title: "Dev Sharma - Software Engineer",
  description:
    "I turn ideas into modern, scalable, and meaningful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full dark",
        "antialiased",
        figtree.className,
        diphylleia.variable
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
