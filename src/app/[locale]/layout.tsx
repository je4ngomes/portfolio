import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "@/styles/globals.css";
import "@/styles/icon.css";

import Header from "@/components/Header";
import DirectMedia from "@/components/DirectMedia";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Lang } from "@/i18n/types/Lang";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

const englishMetadata: Metadata = {
  title: "Jean Jesus",
  description:
    "Jean Jesus is a Software Engineer, building scalable web solutions that drive impact and innovation.",
  keywords: [
    "portfolio",
    "developer",
    "jean de jesus",
    "software engineer",
    "backend developer",
    "fullstack developer",
    "javascript",
    "typescript",
    "postgresql",
    "nodejs",
  ],
  openGraph: {
    images: [{ url: "https://jeanjesus.dev/assets/avatar.jpg" }],
    title: "Jean Jesus | Software Engineer",
    type: "website",
    locale: "en_US",
    siteName: "Jean Jesus",
    description:
      "Jean Jesus is a Software Engineer, building scalable web solutions that drive impact and innovation.",
  },
};

const portugueseMetadata: Metadata = {
  title: "Jean De Jesus",
  description:
    "Jean De Jesus é um Engenheiro de Software, construindo soluções web escaláveis que impulsionam impacto e inovação.",
  keywords: [
    "portfólio",
    "desenvolvedor",
    "jean de jesus",
    "engenheiro de software",
    "desenvolvedor backend",
    "desenvolvedor fullstack",
    "javascript",
    "typescript",
    "postgresql",
    "nodejs",
  ],
  openGraph: {
    images: [{ url: "https://jeanjesus.dev/assets/avatar.jpg" }],
    title: "Jean De Jesus | Engenheiro de Software",
    type: "website",
    locale: "pt_BR",
    siteName: "Jean De Jesus",
    description:
      "Jean De Jesus é um Engenheiro de Software, construindo soluções web escaláveis que impulsionam impacto e inovação.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Lang }>;
}) {
  const { locale } = await params;

  if (locale === "pt") {
    return portugueseMetadata;
  }

  return englishMetadata;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Lang }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="container mx-auto md:px-24 md:py-16 xl:pb-16">
            <div className="flex flex-col xl:grid xl:grid-cols-2">
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
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
