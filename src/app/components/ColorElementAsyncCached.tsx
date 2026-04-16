import { getColorCached } from "../../server/colors";

export default async function ColorElementAsync({
  children,
}: {
  children?: React.ReactNode;
}) {
  const randomColor = await getColorCached();
  return (
    <>
      <p className={`${randomColor} text-black`}>{children}</p>
    </>
  );
}
