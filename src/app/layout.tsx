import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Ziel",
  description: "Focus on your goals, Ziel organizes the process for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen overflow-hidden">
            <Navbar />
            <div className="flex flex-col h-[calc(100%-104px)] my-4 mx-12 p-4 bg-gray-800 rounded-md ">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
