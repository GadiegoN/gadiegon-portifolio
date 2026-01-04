import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { Footer } from "@/components/core/footer";
import { Header } from "@/components/core/header";
import { Analytics } from "@vercel/analytics/next";
import { getMessages, getLocale } from "next-intl/server";
import { IntlProvider } from "@/components/providers/intl-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gadiego Nogueira — Desenvolvedor Frontend",
  description:
    "Desenvolvo sites rápidos, claros e sob medida para pequenas empresas.",
  metadataBase: new URL("https://www.gadiegon.com"),
  openGraph: {
    title: "Gadiego Nogueira — Desenvolvedor Frontend",
    description: "Meu portfólio como desenvolvedor frontend está no ar.",
    url: "https://www.gadiegon.com",
    siteName: "gadiegon.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gadiego Nogueira — Desenvolvedor Frontend",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gadiego Nogueira — Desenvolvedor Frontend",
    description: "Meu portfólio como desenvolvedor frontend está no ar.",
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const storedLang =
    typeof window !== "undefined" ? localStorage.getItem("language") : null;

  const locale = storedLang || (await getLocale());
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntlProvider locale={locale} messages={messages}>
            <Header />

            {children}

            <Footer />

            <Analytics />
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
              fbq('track', 'PageView');
              `,
              }}
            />

            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL}&ev=PageView&noscript=1`}
              />
            </noscript>
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
