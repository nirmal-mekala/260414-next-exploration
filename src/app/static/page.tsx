import Link from "next/link";
import { Suspense } from "react";
import ColorElementAsync from "../components/ColorElementAsync";

export const dynamic = "force-static";

export default function Static() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <ColorElementAsync>Static</ColorElementAsync>
      </Suspense>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
