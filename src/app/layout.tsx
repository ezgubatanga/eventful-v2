import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eventful — Beautiful Digital Wedding Invitations & Online RSVPs",
  description:
    "Create a beautiful digital wedding invitation with Eventful. Choose your style, personalize your page, share it with guests, and manage RSVPs in one place.",
  keywords: [
    "digital wedding invitation",
    "online RSVP",
    "wedding website",
    "wedding invitation design",
    "eventful",
  ],
  metadataBase: new URL("https://eventful.page"),
  openGraph: {
    title: "Eventful — Beautiful Digital Wedding Invitations & Online RSVPs",
    description:
      "Create a beautiful digital wedding invitation with Eventful. Choose your style, personalize your page, share it with guests, and manage RSVPs in one place.",
    url: "https://eventful.page",
    siteName: "Eventful",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventful — Beautiful Digital Wedding Invitations & Online RSVPs",
    description:
      "Create a beautiful digital wedding invitation with Eventful. Choose your style, personalize your page, share it with guests, and manage RSVPs in one place.",
  },
  icons: {
    icon: "/images/favicon.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
