import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Check } from 'lucide-react';
import { useProjects } from '@/hooks/useProjects';
import Lightbox, { useLightbox } from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects, loading } = useProjects();
  const project = projects.find((p) => p.id === id);
  const lb = useLightbox();

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Zaid Almasri Architecture`
    }
  }, [project])

  if (loading) return <div className="pt-40 text-center text-stone-500">Loading project…</div>;
  if (!project) return <Navigate to="/projects" replace />;

  const allImages = [
    ...(project.images.exterior || []),
    ...(project.images.interior || []),
    ...(project.images.floorPlans || []),
    ...(project.images.sketches || []),
  ];

  const sections: { label: string; images?: string[] }[] = [
    { label: 'Exterior Renders', images: project.images.exterior },
    { label: 'Interior Renders', images: project.images.interior },
    { label: 'Floor Plans', images: project.images.floorPlans },
    { label: 'Sketches', images: project.images.sketches },
  ].filter((s) => s.images && s.images.length > 0);

  const meta = [
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Year', value: String(project.year) },
  ];
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 page-padding pb-16 text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest3 uppercase text-gold-400 block mb-4"
          >
            {project.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-light mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/80 max-w-2xl"
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="page-padding py-10 border-b border-stone-200 dark:border-stone-800">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {meta.map((m) => (
            <div key={m.label}>
              <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 mb-2">
                <m.icon size={16} />
                <span className="text-xs tracking-widest2 uppercase">{m.label}</span>
              </div>
              <p className="text-stone-800 dark:text-stone-200 font-medium">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="page-padding py-20">
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <Reveal>
            <h3 className="section-label mb-4">Design Concept</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{project.concept}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="section-label mb-4">Design Challenge</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="section-label mb-4">Solution</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Software */}
      <section className="page-padding py-12 bg-stone-50 dark:bg-stone-900">
        <Reveal className="max-w-4xl mx-auto">
          <h3 className="section-label mb-6 text-center">Software Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.software.map((s) => (
              <span key={s} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm text-stone-700 dark:text-stone-300">
                <Check size={14} className="text-gold-600 dark:text-gold-400" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Gallery sections */}
      {sections.map((section) => (
        <section key={section.label} className="page-padding py-16">
          <Reveal>
            <h3 className="font-display text-3xl font-light text-stone-900 dark:text-stone-100 mb-8">{section.label}</h3>
          </Reveal>
          <div className={`grid gap-4 ${section.images!.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
            {section.images!.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => lb.open(allImages.indexOf(img))}
                className="cursor-pointer overflow-hidden aspect-[4/3] bg-stone-100 dark:bg-stone-900 group"
              >
                <img
                  src={img}
                  alt={`${section.label} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Footer nav */}
      <section className="page-padding py-16 border-t border-stone-200 dark:border-stone-800">
        <Link to="/projects" className="flex items-center gap-3 text-sm tracking-widest2 uppercase text-stone-600 dark:text-stone-400 hover:text-gold-600 transition-colors">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </section>

      <Lightbox images={allImages} index={lb.index} onClose={lb.close} onNavigate={lb.navigate} />
    </div>
  );
}
