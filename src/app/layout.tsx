import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { Footer } from "@/components/core/footer";
import { Header } from "@/components/core/header";
import { Analytics } from "@vercel/analytics/next";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}

          <Footer />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
