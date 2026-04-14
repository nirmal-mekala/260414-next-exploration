import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href="/static">Static Route</Link>
      </p>
      <p>
        <Link href="/dynamic">Dynamic Route</Link>
      </p>
    </>
  );
}
