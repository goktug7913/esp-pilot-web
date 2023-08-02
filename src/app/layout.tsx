"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { AppProvider } from "@/context/appContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESP Pilot Web UI",
  description: "ESP Pilot Web UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <main
              style={{
                margin: "0 1rem",
              }}
            >
              {children}
            </main>
          </QueryClientProvider>
        </AppProvider>
      </body>
    </html>
  );
}
