import type { Metadata } from "next";
import "./styles/globals.css";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Redot Engine - Free and open source 2D and 3D game engine",
  description:
    "Redot provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel.",
  metadataBase: new URL("https://redotengine.org"),
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
