import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans", // Custom variable for the font
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Custom variable for the mono font
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Influmarki",
  description:
    "Influmarki is a creative agency that’s all about making brands pop with bold design, smart marketing, and a touch of innovation. We’re here to help you build a brand that vibes with your audience and stands out in the digital world.",
  openGraph: {
    images: [
      {
        url: "/images/icon.PNG", // Replace with the path to your image
        width: 800,
        height: 600,
        alt: "Influmarki Creative Agency Image", // Add a descriptive alt text
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
