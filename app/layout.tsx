import type { Metadata } from "next";
import localFont from "next/font/local";
import { AmbientCursor } from "@/components/ui/AmbientCursor";
import "./globals.css";

const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-700-normal.woff2",
      weight: "700",
      style: "normal"
    }
  ]
});

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-500-normal.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-800-normal.woff2",
      weight: "800",
      style: "normal"
    }
  ]
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Mohamed Adel Mahmoud | AI/ML Engineer",
  description:
    "AI/ML Engineer and Computer Science graduate building applied AI systems across Generative AI, RAG, computer vision, NLP, backend APIs, knowledge graphs, and cloud technologies.",
  openGraph: {
    title: "Mohamed Adel Mahmoud | AI/ML Engineer",
    description:
      "Applied AI portfolio featuring PharmaSafe, RAG, computer vision, backend APIs, knowledge graphs, and cloud technologies.",
    type: "website",
    images: [
      {
        url: "/assets/profile/mohamed-adel-graduation-portrait.png",
        width: 636,
        height: 854,
        alt: "Mohamed Adel Mahmoud"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <AmbientCursor />
        {children}
      </body>
    </html>
  );
}
