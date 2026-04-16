import { getColorCached } from "../../server/colors";
import { expireColorCache } from "../actions";
import ServerActionButtonRow from "./ServerActionButtonRow";

export default async function ColorElementAsync({
  children,
}: {
  children?: React.ReactNode;
}) {
  const randomColor = await getColorCached();
  return (
    <>
      <p className={`${randomColor} text-black`}>{children}</p>
      <ServerActionButtonRow label="Refresh" action={expireColorCache} />
    </>
  );
}
