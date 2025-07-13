import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/modules";

const workSans = Work_Sans({
    variable: "--font-work-mono",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
    title: "NFT Marketplace",
    description: "Discover digital art & Collect NFTs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="public/logo.svg" />
            </head>
            <body className={`${workSans.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
