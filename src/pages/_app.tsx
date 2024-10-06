import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
