"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { AppProvider } from "@/context/appContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "normalize.css/normalize.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: ReactNode }) {
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
