import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "../lib/content";

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

const description = `${profile.name} — Software Engineer and Full-Stack Developer with a MERN background and Agile delivery practice.`;

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Agile",
    "Project Management",
    "Waqar ul Hassan",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Software Engineer & Full-Stack Developer`,
    description,
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [{ url: "/waqar.jpg", alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Software Engineer & Full-Stack Developer`,
    description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
    shortcut: ["/favicon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  email: profile.email,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  url: profile.siteUrl,
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable} antialiased`}>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
