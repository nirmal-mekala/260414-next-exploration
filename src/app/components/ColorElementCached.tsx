"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { expireColorCache } from "../actions";
import AsyncActionButtonRow from "./AsyncActionButtonRow";

export default function ColorElement({
  children,
}: {
  children?: React.ReactNode;
}) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["color"],
    queryFn: async () => {
      const res = await fetch("/api/colors-cached");
      const data = await res.json();
      return data.color;
    },
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <p className={`${data} text-black`}>{children}</p>
      <AsyncActionButtonRow
        label="Refresh"
        onClickAction={async () => {
          await expireColorCache();
          await queryClient.invalidateQueries({ queryKey: ["color"] });
        }}
      />
    </>
  );
}
