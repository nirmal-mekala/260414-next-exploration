import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href="/ppr">Partial Prerender</Link>
      </p>
      <p>
        <Link href="/static">Static (Partial Prerender + Caching)</Link>
      </p>
      <p>
        <Link href="/csr">CSR Route</Link>
      </p>
    </>
  );
}
