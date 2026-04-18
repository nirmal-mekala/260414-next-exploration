"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorElement from "../components/ColorElement";

const queryClient = new QueryClient();
export default function CSR() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorElement>CSR</ColorElement>
    </QueryClientProvider>
  );
}
