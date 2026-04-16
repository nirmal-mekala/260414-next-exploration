"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import ColorElementCached from "../components/ColorElementCached";

// TODO -- code blocks
// TODO -- layouts (Home)

const queryClient = new QueryClient();
export default function CSRRequestCached() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorElementCached>CSR Request Cached</ColorElementCached>
      <p>
        <Link href="/">Home</Link>
      </p>
    </QueryClientProvider>
  );
}
