import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://travid.tech"),
  title: "Travid Technologies | Enterprise-grade software that scales",
  description:
    "Travid Technologies builds high-performance software, cloud platforms, and digital products that scale with your business.",
  openGraph: {
    title: "Travid Technologies",
    description:
      "Enterprise-grade software development for ambitious teams. Design, build, and scale with confidence.",
    url: "https://travid.tech",
    siteName: "Travid Technologies",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Travid Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travid Technologies",
    description:
      "Enterprise-grade software development for ambitious teams. Design, build, and scale with confidence.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
