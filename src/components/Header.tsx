export default function Header() {
  return (
    <header className=\"sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70\">
      <div className=\"mx-auto max-w-6xl px-4 py-3 flex items-center justify-between\">
        <a href=\"/\" className=\"flex items-center gap-3\">
          <img src=\"/logo.svg\" alt=\"Rapid Home Aid\" className=\"h-7 w-auto\" />
          <span className=\"text-slate-900 font-semibold\">Rapid Home Aid</span>
        </a>
        <nav className=\"hidden md:flex items-center gap-6 text-sm text-slate-700\">
          <a href=\"/water-damage\" className=\"hover:underline\">Water Damage</a>
          <a href=\"/flood-cleanup\" className=\"hover:underline\">Flood Cleanup</a>
          <a href=\"/burst-pipe\" className=\"hover:underline\">Burst Pipe</a>
          <a href=\"/about\" className=\"hover:underline\">About</a>
        </nav>
      </div>
    </header>
  );
}