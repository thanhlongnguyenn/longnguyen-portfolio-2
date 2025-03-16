import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Rock_Salt } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Long Nguyen",
  description: "Long Nguyen's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, jetBrainMono.variable, "bg-[#333333] text-[#D6D2BD] font-sans antialiased")}>{children}</body>
    </html>
  );
}
