import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google"; // ✅ use Montserrat
import "./globals.css";
import AOSWrapper from "./providers/AOSWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // optional custom CSS variable
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Confluence 2.0",
  description:
    "The Largest Student Web3 Conference in Southwestern Nigeria. Powered by Blockchain LAUTECH—a Tier-1 University Blockchain Club in Africa.",
  icons: {
    icon: "/con-img (1).jpg",
  },
  openGraph: {
    title: "Confluence 2.0",
    description:
      "The Largest Student Web3 Conference in Southwestern Nigeria. Powered by Blockchain LAUTECH—a Tier-1 University Blockchain Club in Africa.",
    url: "https://confluence.blockchainlautech.club/",
    siteName: "Confluence 2.0",
    images: [
      {
        url: "/con-img (1).jpg",
        width: 800,
        height: 800,
        alt: "Confluence 2.0 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confluence 2.0",
    description:
      "The Largest Student Web3 Conference in Southwestern Nigeria. Powered by Blockchain LAUTECH—a Tier-1 University Blockchain Club in Africa.",
    images: ["/con-img (1).jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
