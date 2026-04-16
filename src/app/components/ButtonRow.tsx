export default function ButtonRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-[var(--spacing-container-x)]">{children}</div>;
}
