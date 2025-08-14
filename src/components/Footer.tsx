export default function Footer() {
  return (
    <footer className=\"mt-16 border-t border-slate-200 bg-white\">
      <div className=\"mx-auto max-w-6xl px-4 py-10\">
        <div className=\"grid gap-8 md:grid-cols-3\">
          <div>
            <div className=\"flex items-center gap-3\">
              <img src=\"/logo.svg\" alt=\"Rapid Home Aid\" className=\"h-7 w-auto\" />
              <span className=\"text-slate-900 font-semibold\">Rapid Home Aid</span>
            </div>
            <p className=\"mt-3 text-sm text-slate-600\">
              24/7 coordination for water damage emergencies across Florida.
            </p>
          </div>
          <nav className=\"text-sm\">
            <h3 className=\"font-semibold text-slate-900\">Services</h3>
            <ul className=\"mt-3 space-y-2 text-slate-600\">
              <li><a className=\"hover:underline\" href=\"/water-damage\">Water Damage</a></li>
              <li><a className=\"hover:underline\" href=\"/flood-cleanup\">Flood Cleanup</a></li>
              <li><a className=\"hover:underline\" href=\"/burst-pipe\">Burst Pipe</a></li>
              <li><a className=\"hover:underline\" href=\"/hvac\">Emergency HVAC</a></li>
            </ul>
          </nav>
          <div className=\"text-sm\">
            <h3 className=\"font-semibold text-slate-900\">Company</h3>
            <ul className=\"mt-3 space-y-2 text-slate-600\">
              <li><a className=\"hover:underline\" href=\"/about\">About</a></li>
              <li><a className=\"hover:underline\" href=\"/privacy\">Privacy</a></li>
              <li><a className=\"hover:underline\" href=\"/terms\">Terms</a></li>
              <li><a className=\"hover:underline\" href=\"mailto:help@rapidhomeaid.com\">help@rapidhomeaid.com</a></li>
            </ul>
          </div>
        </div>
        <div className=\"mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row\">
          <p>© {new Date().getFullYear()} Rapid Home Aid. All rights reserved.</p>
          <p>Calls may be recorded. We coordinate with licensed, insured contractors.</p>
        </div>
      </div>
    </footer>
  );
}