import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "RCCG Livingspring Church Dundee",
  description:
    "RCCG Livingspring Church Dundee is a welcoming church community for worship, prayer, teaching, and meaningful connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-church-ink antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
