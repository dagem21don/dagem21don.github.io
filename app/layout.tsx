import type { Metadata } from "next";
import "./globals.css";

const title = "Dagem Woldeyohannes — Software Engineer";
const description =
  "Seattle-based software engineer focused on clear thinking, reliable code, and useful products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dagem21don.github.io"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
