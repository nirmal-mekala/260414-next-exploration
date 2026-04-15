import Link from "next/link";
import { Suspense } from "react";
import ColorElement from "../components/ColorElement";

export const dynamic = "force-dynamic";

export default function DynamicSSR() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <ColorElement>Dynamic SSR</ColorElement>
      </Suspense>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
