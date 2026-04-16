import { getColorCached } from "../../../server/colors";

export async function GET() {
  const color = await getColorCached();
  return Response.json({ color });
}
