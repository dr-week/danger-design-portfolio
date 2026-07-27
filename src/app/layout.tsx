import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";
import GlobalCanvas from "@/components/ui/GlobalCanvas";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Dishant Naik | Danger Design",
  description:
    "I design interfaces, direct motion, and write the code to make them work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${caveat.variable} font-sans bg-black text-white antialiased w-full overflow-x-hidden min-h-screen`}
        suppressHydrationWarning
      >
        <GlobalCanvas />
        <CursorFollower />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
