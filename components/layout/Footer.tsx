import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-walnut/15 py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-walnut sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mohamed Adel Mahmoud. Built for local portfolio review.</p>
        <div className="flex gap-5 font-semibold">
          <Link href="/#home" className="hover:text-ink">
            Home
          </Link>
          <Link href="/projects/pharmasafe" className="hover:text-ink">
            PharmaSafe
          </Link>
        </div>
      </div>
    </footer>
  );
}
