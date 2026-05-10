import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verde Import | Advanced Nanomaterials for US Industry",
  description:
    "Verde Import sources high-purity graphene and nanomaterials from verified international producers, delivering to the US market with local support and quality assurance.",
  metadataBase: new URL("https://verdeimport.com"),
  openGraph: {
    title: "Verde Import | Advanced Nanomaterials for US Industry",
    description:
      "High-purity graphene nanoplatelets, graphene oxide, and reduced graphene oxide — sourced globally, delivered locally.",
    url: "https://verdeimport.com",
    siteName: "Verde Import",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verde Import | Advanced Nanomaterials for US Industry",
    description:
      "High-purity graphene nanoplatelets, graphene oxide, and reduced graphene oxide — sourced globally, delivered locally.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal-950 font-sans">
        {children}
      </body>
    </html>
  );
}
