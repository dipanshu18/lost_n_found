import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "Lost & Found",
    template: "%s - Lost & Found",
  },
  description:
    "Lost and Found is a student-focused web app that simplifies lost item reporting, connecting owners with finders, and prioritizes user privacy and security, offering email notifications and validation questions for a seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="container mx-auto px-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
