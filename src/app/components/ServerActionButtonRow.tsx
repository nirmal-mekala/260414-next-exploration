import ButtonRow from "./ButtonRow";

type ServerActionButtonRowProps = {
  label: string;
  action: () => Promise<void>;
};

export default function ServerActionButtonRow({
  label,
  action,
}: ServerActionButtonRowProps) {
  return (
    <ButtonRow>
      <form action={action}>
        <button
          type="submit"
          className="px-4 py-2 cursor-pointer bg-[var(--bg-color-2)] text-[var(--fg-color-2)] border border-[1px solid var(--fg-color-2)]"
        >
          {label}
        </button>
      </form>
    </ButtonRow>
  );
}
