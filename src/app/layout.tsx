import type { Metadata } from "next";
import { Sedgwick_Ave } from "next/font/google";
import "./globals.css";

const inter = Sedgwick_Ave({ weight: "400", style: "normal", subsets: ["latin-ext"]});

export const metadata: Metadata = {
  title: "$BONGEN | Have a puff, Jack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
