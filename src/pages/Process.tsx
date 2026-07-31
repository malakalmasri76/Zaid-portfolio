import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/data/process';
import Reveal from '@/components/Reveal';

export default function Process() {
  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-12 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <span className="section-label">Methodology</span>
          <h1 className="section-title mt-4 mb-6">Design Process</h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            A structured yet flexible approach that guides every project from initial conversation to final construction, ensuring clarity and quality at every stage.
          </p>
        </Reveal>
      </section>

      <section className="page-padding py-20">
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700 -translate-x-1/2" />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={0.1} className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-16`}>
              <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="font-display text-5xl text-gold-600 dark:text-gold-400">{step.number}</span>
                  <div className="w-14 h-14 flex items-center justify-center bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <step.icon size={24} className="text-stone-600 dark:text-stone-400" strokeWidth={1.2} />
                  </div>
                </div>
                <h3 className="font-display text-3xl font-medium mb-3 text-stone-900 dark:text-stone-100">{step.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4">{step.description}</p>
                <p className="text-xs tracking-widest2 uppercase text-gold-600 dark:text-gold-400 mb-3">{step.duration}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {step.deliverables.map((d) => (
                    <span key={d} className="text-xs px-3 py-1.5 border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="hidden md:block absolute left-1/2 top-6 w-3 h-3 bg-gold-500 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-stone-950"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Let's build together</h2>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
