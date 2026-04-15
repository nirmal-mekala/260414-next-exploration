import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href="/static">Static Route</Link>
      </p>
      <p>
        <Link href="/dynamic-ssr">Dynamic SSR Route</Link>
      </p>
      <p>
        <Link href="/dynamic-ssr-no-suspense">
          Dynamic SSR Route - No Suspense
        </Link>
      </p>
    </>
  );
}
