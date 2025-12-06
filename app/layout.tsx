import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jon SF Energy",
  description: "Jon SF Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ flex: 1, height: "70vh" }} >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
