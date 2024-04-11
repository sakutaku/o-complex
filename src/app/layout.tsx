import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Reviews from "./containers/reviews/Reviews";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
        <h1 className="main-title">Тестовое задание</h1>
        <Reviews/>
        {children}
        </main>
        </body>
    </html>
  );
}
