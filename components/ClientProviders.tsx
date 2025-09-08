"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col flex-grow">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
