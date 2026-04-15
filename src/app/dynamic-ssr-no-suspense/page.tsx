import Link from "next/link";
import ColorElementAsync from "../components/ColorElement";

export const dynamic = "force-dynamic";

export default function DynamicSSRNoSuspense() {
  return (
    <>
      <ColorElementAsync>Dynamic SSR</ColorElementAsync>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
