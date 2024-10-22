import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { Tajawal } from "next/font/google";
import { getMessages } from "next-intl/server";
import "./globals.css";

const inter = Tajawal({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "200",
});
export const metadata: Metadata & {
  title: { template: string; default: string };
  verification: { google: string };
} = {
  title: {
    template: "%s | Adel Assem Portfolio | MERN Stack Developer",
    default: "Adel Assem Portfolio | MERN Stack Developer | Full-Stack Development Services",
  },
  description:
    "Welcome to Adel Assem's portfolio. I am a MERN stack developer specializing in building high-quality web applications. Explore my projects and get in touch for collaboration.",
  verification: {
    google: "zClMKi9biXYt2s7E6hRCHA9qzlG9ijHtoXB-C3cGoVM",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <title>{metadata.title.default ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <meta
          name="google-site-verification"
          content={metadata.verification?.google ?? ""}
        />
        {/* Removed invalid date meta tag */}
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
