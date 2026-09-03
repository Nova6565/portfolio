export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-full border border-walnut/20 bg-ivory/70 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
      {children}
    </span>
  );
}
