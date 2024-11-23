import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMon = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Travel Right | Best Travel App",
  description:
    "Travel Right is a travel app that helps you find the best deals on flights, hotels, and rental cars. Whether you're planning a family vacation or a solo trip, Travel Right has you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${neueMon.variable}antialiased`}>{children}</body>
    </html>
  );
}
