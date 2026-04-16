"use client";

import { useQuery } from "@tanstack/react-query";

export default function ColorElement({
  children,
}: {
  children?: React.ReactNode;
}) {
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

  return <p className={`${data} text-black`}>{children}</p>;
}
