import Link from "next/link";
import ColorElement from "../components/ColorElement";

export const dynamic = "force-dynamic";

export default function DynamicSSRNoSuspense() {
  return (
    <>
      <ColorElement>Dynamic SSR</ColorElement>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
}
