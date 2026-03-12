import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cashifi - The #1 SBA Lending Marketplace",
  description: "Connect with 500+ licensed lenders for SBA 7(a) loans, CDC/504 loans, and CAPLines. $2B+ in businesses funded with 48-hour approval and 95% approval rate.",
  keywords: "SBA loans, small business loans, SBA 7(a), CDC/504, CAPLines, business lending, marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-[#0A0A0F] text-white`}>
        {children}
      </body>
    </html>
  );
}