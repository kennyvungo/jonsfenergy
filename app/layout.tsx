import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jon SF Energy",
  description: "Residential Energy & Water Conservation Inspections in San Francisco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* LocalBusiness + Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jon SF Energy",
              url: "https://jonsfenergy.com",
              telephone: "415-860-1609",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "San Francisco",
              },
              serviceOffered: {
                "@type": "Service",
                name: "Residential Energy & Water Conservation Inspection",
                areaServed: "San Francisco, CA",
              },
            }),
          }}
        />

        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}