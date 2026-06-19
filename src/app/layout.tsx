import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Dami | Software Engineer",
    description: "Oluwadamilola (Dami) Ogunbode — software engineer building across the stack: web apps, AI tools, and ML pipelines.",
};

const THEME_INIT = `
try {
  var t = localStorage.getItem('dami-theme');
  if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
} catch (e) {}
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
            </head>
            <body
                className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
