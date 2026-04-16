import Link from "next/link";
import { Suspense } from "react";
import ColorElementAsync from "../components/ColorElementAsync";

export default function PPR() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <ColorElementAsync>PPR</ColorElementAsync>
      </Suspense>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
