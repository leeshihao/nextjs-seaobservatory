import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SEA Observatory",
  description: "SEA Observatory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <>
          <title>SEA Observatory</title>
          <meta name="description" content="AI policies in South East Asia" />
          {/* <!-- Google tag (gtag.js) --> */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-JEC5DGZE1F" strategy="afterInteractive"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JEC5DGZE1F');
            `}
          </Script>
          {/* Airtable preconnect/prefetch */}
          <link rel="preconnect" href="https://airtable.com" />
          <link rel="preconnect" href="https://static.airtable.com" />
          <link rel="dns-prefetch" href="https://airtable.com" />
          <link rel="dns-prefetch" href="https://static.airtable.com" />
        </>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{paddingTop: "5rem", paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1rem"}}>
          {children}
        </main>
      </body>
    </html>
  );
}
