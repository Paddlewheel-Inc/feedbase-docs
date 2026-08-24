import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/topbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = JetBrains_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
});

const instrumentSerif = Caveat({
  variable: "--font-handwriting",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usercue.app'),
  title: {
    default: "UserCue",
    template: "%s | UserCue"
  },
  icons: [{ rel: 'icon', url: '/fb.png' }],
  description: "Listen, learn, and grow with your users. The open-source feedback platform built for modern product teams.",
  openGraph: {
    title: 'UserCue',
    description: 'Open source feedback management platform for product teams.',
    url: 'https://usercue.app',
    siteName: 'UserCue',
    images: [
      {
        url: '/landing.png',
        width: 1920,
        height: 1080,
        alt: 'UserCue Landing Page',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UserCue',
    description: 'Open source feedback management platform for product teams.',
    images: ['/landing.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <meta content="#ff2b87" data-react-helmet="true" name="theme-color" />
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}