import Link from "next/link";
import { Suspense } from "react";
import ColorElementAsync from "../components/ColorElementAsync";

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
