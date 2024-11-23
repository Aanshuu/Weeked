import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";
import Providers from "./providers";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

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
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <Providers>
          <SidebarProvider>
            <Navbar />
            {children}
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
