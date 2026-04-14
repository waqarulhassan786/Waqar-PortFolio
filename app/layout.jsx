import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Waqar ul Hassan - MERN Stack Developer",
  description: "Professional portfolio of Waqar ul Hassan, a skilled MERN Stack Developer specializing in MongoDB, Express.js, React, Node.js, and modern full-stack web technologies.",
  keywords: "MERN Stack Developer, MongoDB, Express.js, React, Node.js, Full-Stack Developer, Web Development, Portfolio",
  authors: [{ name: "Waqar ul Hassan" }],
  openGraph: {
    title: "Waqar ul Hassan - MERN Stack Developer",
    description: "Professional portfolio showcasing modern full-stack web development projects and MERN stack expertise",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      
      
    >
      <body>{children}</body>
    </html>
  );
}
