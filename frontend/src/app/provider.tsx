"use client";
import { ThemeProvider, SquaresProvider } from "@/lib/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Provider = ({ children }: Props) => {
  const [client] = useState(() => new QueryClient());
  return (
    <ThemeProvider>
      <SquaresProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </SquaresProvider>
    </ThemeProvider>
  );
};
