import { getColor } from "../../../server/colors";

export async function GET() {
  const color = await getColor();
  return Response.json({ color });
}
