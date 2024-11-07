import type { Metadata } from "next";
import "./globals.css";

import { Almendra, Diphylleia } from "next/font/google";

const almendra = Almendra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-almendra",
});

const diphylleia = Diphylleia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-diphylleia",
});

export const metadata: Metadata = {
  title: "Culinary Class Party",
  description: "By Chungmuro Matpia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almendra.variable} ${diphylleia.variable} font-diphylleia antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
