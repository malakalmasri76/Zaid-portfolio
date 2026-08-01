import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800"
            : "bg-transparent"
        }`}
      >
        <nav className="page-padding flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Zaid Almasri"
              className="h-16 w-auto dark:invert dark:hue-rotate-180"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path
                    ? "text-gold-600 dark:text-gold-400"
                    : scrolled || !isHome
                      ? "text-stone-700 dark:text-stone-300"
                      : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={site.brochurePdf}
              download
              className={`group flex items-center overflow-hidden rounded-full transition-all duration-300 ease-out hover:scale-105 ${
                scrolled || !isHome
                  ? "text-stone-700 dark:text-stone-300"
                  : "text-white/90"
              } hover:text-gold-600 dark:hover:text-gold-400`}
              aria-label="Download brochure PDF"
            >
              <span className="flex items-center gap-2 px-2 py-2">
                <Download size={18} className="shrink-0" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs tracking-wider uppercase opacity-0 transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100">
                  Download PDF
                </span>
              </span>
            </a>
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 transition-colors ${
                scrolled || !isHome
                  ? "text-stone-700 dark:text-stone-300"
                  : "text-white/90"
              } hover:text-gold-600 dark:hover:text-gold-400`}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled || !isHome ? "text-stone-800 dark:text-stone-200" : "text-white"}`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-stone-950 lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center gap-6 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-display ${
                    location.pathname === link.path
                      ? "text-gold-600"
                      : "text-stone-800 dark:text-stone-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={site.brochurePdf}
                download
                className="mt-4 flex items-center gap-2 text-stone-600 dark:text-stone-400"
              >
                <Download size={20} />
                <span className="text-sm tracking-wider uppercase">
                  Download PDF
                </span>
              </a>
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center gap-2 text-stone-600 dark:text-stone-400"
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
                <span className="text-sm tracking-wider uppercase">
                  {dark ? "Light" : "Dark"} Mode
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
