export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-10 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} DISHANT NAIK // DANGER DESIGN
          </p>
          <p className="font-caveat text-base text-amber-400 mt-1">
            * B.E. Computer Engineering × MBA Marketing
          </p>
        </div>

        {/* Professional Social & Network Links */}
        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a
            href="mailto:hello@dishantnaik.com"
            className="hover:text-amber-400 transition-colors"
          >
            [ EMAIL ]
          </a>
          <a
            href="https://github.com/DR-WEEK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            [ GITHUB ]
          </a>
          <a
            href="https://instagram.com/HYPERDRIVE_STUDIO0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            [ INSTAGRAM ]
          </a>
          <a
            href="https://youtube.com/@DISHANTNAIK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            [ YOUTUBE ]
          </a>
        </div>
      </div>
    </footer>
  );
}
