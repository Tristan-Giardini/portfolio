import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/SmoothScroll";
import '@splidejs/splide/dist/css/splide.min.css';
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Tristan Giardini",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
          {/* <div style={{ zIndex: -10, position: "fixed", width: "100vw", height: "100vh" }}>
            <Image src="/wave.jpg" alt="background-image" layout="fill" objectFit="cover" />
          </div> */}
          <div className="w-full">
          <Header />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Footer />
        </div>
      </body>
    </html>
  );
}
