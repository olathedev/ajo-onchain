import type { Metadata } from "next";
import { Josefin_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import CustomRainbowKitProvider from "@/providers/RainbowKitProvider";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} ${josefin.variable} font-outfit antialiased`}
        suppressHydrationWarning
      >
        <CustomRainbowKitProvider>{children}</CustomRainbowKitProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
