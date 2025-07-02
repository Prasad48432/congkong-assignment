import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cong Kong Freinds",
  description:
    "Based on many years of event experience, we provide optimized solutions, a perfect event platform for both participants and organizers, and the entire process from pre-registration to check-in to event operation to reporting is provided on a single platform.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased inter`}>{children}</body>
    </html>
  );
}
