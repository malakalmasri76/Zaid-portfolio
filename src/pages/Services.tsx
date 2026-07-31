import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-12 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <span className="section-label">Expertise</span>
          <h1 className="section-title mt-4 mb-6">Services</h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            From concept to completion, a full range of architectural services tailored to bring your vision to life with precision and care.
          </p>
        </Reveal>
      </section>

      <section className="page-padding pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.1}>
              <div className="p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 card-hover h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gold-50 dark:bg-gold-900/20 mb-6">
                  <s.icon size={28} className="text-gold-600 dark:text-gold-400" strokeWidth={1.2} />
                </div>
                <h3 className="font-display text-2xl font-medium mb-3 text-stone-900 dark:text-stone-100">{s.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mb-6 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <span className="w-1 h-1 bg-gold-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Ready to begin?</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Every project starts with a conversation. Let's discuss how I can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
