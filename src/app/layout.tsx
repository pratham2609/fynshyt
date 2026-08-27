import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fynshyt",
  description:
    "fynshyt — a brutalist, no-nonsense corner of the web. One button, infinite surprises.",
  applicationName: "fynshyt",
  authors: [{ name: "fynshyt" }],
  keywords: ["fynshyt", "brutalist", "surprise", "random"],
  openGraph: {
    title: "fynshyt",
    description: "One yellow page. One orange brutalist button. Infinite surprises.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fynshyt",
    description: "One yellow page. One orange brutalist button. Infinite surprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
