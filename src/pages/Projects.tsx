import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects } from '@/hooks/useProjects';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Landscape', 'Competitions', 'Concept Designs'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const { projects } = useProjects();

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-12">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="section-label">Portfolio</span>
          <h1 className="section-title mt-4 mb-6">Projects</h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            A selection of architectural works spanning residential, commercial, interior, and landscape design — each presented as a complete case study.
          </p>
        </Reveal>
      </section>

      <section className="page-padding pb-20">
        <Reveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-medium tracking-widest2 uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                  : 'border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-stone-500 py-20">No projects in this category yet.</p>
        )}
      </section>
    </div>
  );
}