import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import GlobalCanvas from "@/components/ui/GlobalCanvas";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Dishant Naik | UI/UX Developer & Video Editor in Goa",
  description:
    "I design clean, fast interfaces and edit professional videos. Freelance frontend developer and 3D designer based in Goa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased w-full overflow-x-hidden min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalCanvas />
          <CursorFollower />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
