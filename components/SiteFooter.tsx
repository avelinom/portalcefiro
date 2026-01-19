export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm text-white/70 md:flex-row md:items-center">
        <span>© {year} Cefiro Advisors. Todos los derechos reservados.</span>
        <span className="text-white/50">Landing independiente del portal.</span>
      </div>
    </footer>
  );
}
