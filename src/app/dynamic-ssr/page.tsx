import Link from "next/link";
import { Suspense } from "react";
import ColorElementAsync from "../components/ColorElement";

export const dynamic = "force-dynamic";

export default function DynamicSSR() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <ColorElementAsync>Dynamic SSR</ColorElementAsync>
      </Suspense>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
