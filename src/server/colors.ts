import "server-only";
import { cacheLife } from "next/cache";

export async function getColorCached() {
  "use cache";
  cacheLife("max");
  return getColor();
}

export async function getColor() {
  const bgColors = [
    "bg-red-300",
    "bg-orange-300",
    "bg-amber-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-green-300",
    "bg-emerald-300",
    "bg-teal-300",
    "bg-cyan-300",
    "bg-sky-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
    "bg-fuchsia-300",
    "bg-pink-300",
    "bg-rose-300",
  ] as const;
  const randomColor = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(bgColors[Math.floor(Math.random() * bgColors.length)]);
    }, 1500);
  });
  return randomColor;
}
