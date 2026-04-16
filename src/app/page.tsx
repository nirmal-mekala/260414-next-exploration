import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href="/dynamic-ssr">Dynamic SSR Route</Link>
      </p>
      <p>
        <Link href="/dynamic-ssr-cached">Dynamic SSR Route - Cached</Link>
      </p>
      <p>
        <Link href="/csr">CSR Route</Link>
      </p>
    </>
  );
}
