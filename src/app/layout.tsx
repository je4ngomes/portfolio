import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/icon.css";
import Header from "@/components/Header";
import DirectMedia from "@/components/DirectMedia";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean De Jesus",
  description: "Portfolio of Jean De Jesus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <div className="container mx-auto md:px-24 md:py-16 lg:pb-16">
          <div className="grid grid-cols-2">
            <div className="relative">
              <div className="flex flex-col justify-between h-full">
                <Header />
                <DirectMedia />
              </div>
            </div>
            {/* Scrollable content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
