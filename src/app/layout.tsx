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
      <body
        className="m-0 overflow-x-hidden p-0 text-church-ink antialiased"
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />
        <main className="m-0 p-0 pb-0" style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
