import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iaWriterDuospace = localFont({
  src: [
    {
      path: "../public/fonts/ia-writer-duospace-regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/ia-writer-duospace-bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-ia-writer-duospace",
  display: "swap"
});

const valkyrieB = localFont({
  src: [
    {
      path: "../public/fonts/valkyrie-b-regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/valkyrie-b-bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-valkyrie-b",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Yohanes Sitanggang Portfolio",
  description: "Interaction designer portfolio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${iaWriterDuospace.variable} ${valkyrieB.variable}`}>
      <body>{children}</body>
    </html>
  );
}
