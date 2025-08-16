import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter globally
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // ensures better performance
});

export const metadata: Metadata = {
  title: "Praveen Singh Rawat",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
