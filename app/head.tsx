// app/head.tsx
import Script from "next/script";

export default function Head() {
    return (
      <>
        <title>SEA Observatory</title>
        <meta name="description" content="AI policies in South East Asia" />
        {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JEC5DGZE1F"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JEC5DGZE1F');
          `,
        }}
      />
    </>
    );
  }