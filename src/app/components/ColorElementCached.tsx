"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { expireColorCache } from "../actions";

export default function ColorElement({
  children,
}: {
  children?: React.ReactNode;
}) {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const res = await fetch("/api/colors-cached");
      const data = await res.json();
      return data.color;
    },
  });

  if (isFetching) {
    return <p>Loading</p>;
  }

  return (
    <>
      <p className={`${data} text-black`}>{children}</p>
      {/* TODO move somewhere... */}
      <div className="px-[var(--spacing-container-x)]">
        <button
          type="button"
          className="px-4 py-2 cursor-pointer bg-[var(--bg-color-2)] text-[var(--fg-color-2)] border border-[1px solid var(--fg-color-2)]"
          onClick={async () => {
            await expireColorCache();
            queryClient.invalidateQueries({ queryKey: ["color"] });
          }}
        >
          Refresh
        </button>
      </div>
    </>
  );
}
