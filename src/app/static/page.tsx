import { Suspense } from "react";
import ColorElementAsyncCached from "../components/ColorElementAsyncCached";

export const unstable_instant = {
  prefetch: "static",
};

export default function Static() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ColorElementAsyncCached>Static</ColorElementAsyncCached>
    </Suspense>
  );
}
