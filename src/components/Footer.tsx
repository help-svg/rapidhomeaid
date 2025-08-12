export default function Footer(){
  return (
    <footer className="border-t border-slate-200 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center md:justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Rapid Home Aid. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
