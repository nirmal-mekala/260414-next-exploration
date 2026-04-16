import Link from "next/link";
import { Suspense } from "react";
import ColorElementAsyncCached from "../components/ColorElementAsyncCached";

export default function DynamicSSRCached() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <ColorElementAsyncCached>Dynamic SSR Cached</ColorElementAsyncCached>
      </Suspense>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
