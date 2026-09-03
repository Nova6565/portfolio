export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-brass/45 pl-4">
      <dt className="serif text-3xl font-semibold leading-none text-ink">{value}</dt>
      <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-walnut">{label}</dd>
    </div>
  );
}
