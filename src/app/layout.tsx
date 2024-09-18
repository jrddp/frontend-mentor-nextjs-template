import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FMPreview } from "@components/fm-preview/fm-preview";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FMPreview />
        {children}
      </body>
    </html>
  );
}
