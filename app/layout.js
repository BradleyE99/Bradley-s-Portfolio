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
  title: "Bradley Elder | AI & Software Engineering Portfolio",
  description:
    "Bradley Elder is a third-year Systems Engineering and Computer Science student at the University of Virginia seeking AI Engineering, Software Engineering, and Forward Deployed Engineering roles.",
  openGraph: {
    title: "Bradley Elder | AI & Software Engineering Portfolio",
    description:
      "Third-year UVA Systems Engineering and Computer Science student building integrations, AI agents, and full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
