import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Coffee Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} font-jost bg-[#edeff1] antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
