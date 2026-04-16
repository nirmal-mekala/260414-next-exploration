"use client";

import ButtonRow from "./ButtonRow";

type AsyncActionButtonRowProps = {
  label: string;
  onClickAction: () => Promise<void>;
};

export default function AsyncActionButtonRow({
  label,
  onClickAction,
}: AsyncActionButtonRowProps) {
  return (
    <ButtonRow>
      <button
        type="button"
        className="px-4 py-2 cursor-pointer bg-[var(--bg-color-2)] text-[var(--fg-color-2)] border border-[1px solid var(--fg-color-2)]"
        onClick={onClickAction}
      >
        {label}
      </button>
    </ButtonRow>
  );
}
