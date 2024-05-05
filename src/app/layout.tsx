import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Web Developer - Michał Kaniowski",
  description:
    "Hey, I'm Mike, a driven web developer proficient in crafting efficient, user-centric solutions. Experienced in translating client vision into polished and functional websites.",
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer - Michał Kaniowski",
    description:
      "Hey, I'm Mike, a driven web developer proficient in crafting efficient, user-centric solutions. Experienced in translating client vision into polished and functional websites.",
    creator: "@Jtjadmjki",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/metadata/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/metadata/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/metadata/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/metadata/site.webmanifest" />
      <meta name="twitter:image" content="" />
      <body className={`grainy ${inter.className}`}>{children}</body>
    </html>
  );
}
