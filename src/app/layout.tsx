import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jesli-rishad-wedding.vercel.app"
  ),
  title: "Wedding Reception | Sainaba Jesli & Muhammed Rishad",
  description:
    "Cordially invite your esteemed presence with family for the wedding reception of Sainaba Jesli & Muhammed Rishad on Saturday, 5th December 2026 at Hayath Convention Centre, Cherumukku.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Wedding Reception | Sainaba Jesli & Muhammed Rishad",
    description:
      "Cordially invite your esteemed presence with family for the wedding reception of Sainaba Jesli & Muhammed Rishad on Saturday, 5th December 2026 at Hayath Convention Centre, Cherumukku.",
    images: [
      {
        url: "/jesliandrishad-og.png",
        width: 1200,
        height: 630,
        alt: "Wedding Reception of Sainaba Jesli & Muhammed Rishad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Reception | Sainaba Jesli & Muhammed Rishad",
    description:
      "Cordially invite your esteemed presence with family for the wedding reception of Sainaba Jesli & Muhammed Rishad on Saturday, 5th December 2026 at Hayath Convention Centre, Cherumukku.",
    images: ["/jesliandrishad-og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#140b07] text-[#f7ede2] selection:bg-[#c5a059] selection:text-[#1a0e08] min-h-screen">
        {children}
      </body>
    </html>
  );
}
