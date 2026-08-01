import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp, Download } from 'lucide-react';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-8">
      <div className="page-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <img src="/logo.png" alt={site.name} className="h-16 w-auto invert hue-rotate-180" />
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Designing spaces that inspire people. A creative architecture practice based in Palestine.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest3 uppercase text-gold-500 mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-gold-400 transition-colors">Projects</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest3 uppercase text-gold-500 mb-6">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-400 transition-colors">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500" />
                <a href={`tel:${site.phoneLink}`} className="hover:text-gold-400 transition-colors">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Download size={16} className="text-gold-500" />
                <a href={site.brochurePdf} download className="hover:text-gold-400 transition-colors">Download PDF</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500 tracking-wider">
            © {new Date().getFullYear()} Zaid Almasri. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-400 hover:text-gold-400 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
          <Link to="/privacy" className="text-xs text-stone-500 hover:text-gold-400 transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
