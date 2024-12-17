import type { Metadata } from "next";
import { Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Gomes",
  description: "Portfolio of Jean Gomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container mx-auto md:px-16 md:py-16 lg:py-0">
          <div className="grid grid-cols-2">
            <div className="relative">
              <Header />
            </div>
            {/* Scrollable content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
