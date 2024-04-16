import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devlinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} text-darkgray text-base`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
