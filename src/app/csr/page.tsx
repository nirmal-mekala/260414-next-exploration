"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import ColorElement from "../components/ColorElement";

// TODO -- code blocks
// TODO -- layouts (Home)
// TODO keep? need better understanding of how dynamic/static works vs. client/server components
export const dynamic = "force-dynamic";

const queryClient = new QueryClient();
export default function CSR() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorElement>CSR</ColorElement>
      <p>
        <Link href="/">Home</Link>
      </p>
    </QueryClientProvider>
  );
}
