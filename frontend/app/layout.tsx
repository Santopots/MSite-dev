import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&S Cuines",
  description: "Cuines a mesura i mobiliari per a la llar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
