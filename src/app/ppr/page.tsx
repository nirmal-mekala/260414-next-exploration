import { Suspense } from "react";
import ColorElementAsync from "../components/ColorElementAsync";

export default function PPR() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ColorElementAsync>PPR</ColorElementAsync>
    </Suspense>
  );
}
