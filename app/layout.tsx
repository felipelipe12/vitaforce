import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vita Force",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-t from-teal-300 from-50% to-teal-100 to-50%`}>
        {children}
      </body>
    </html>
  );
}
