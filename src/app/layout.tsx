import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Quickbet Movies",
  description: "Created by Ingeniero Oscar Giraldo frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
