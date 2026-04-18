import { connection } from "next/server";
import { getColorCached } from "../../../server/colors";

export async function GET() {
  await connection();
  const color = await getColorCached();
  return Response.json({ color });
}
