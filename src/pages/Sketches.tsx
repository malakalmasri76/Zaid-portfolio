import { motion } from 'framer-motion';
import { sketchImages } from '@/data/projects';
import Lightbox, { useLightbox } from '@/components/Lightbox';
import Reveal from '@/components/Reveal';

export default function Sketches() {
  const lb = useLightbox();
  const images = sketchImages.map((s) => s.src);

  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-12 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <span className="section-label">Hand Drawn</span>
          <h1 className="section-title mt-4 mb-6">Sketches</h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            A collection of hand sketches, concept explorations, and initial ideas — the raw first thoughts that eventually become architecture.
          </p>
        </Reveal>
      </section>

      <section className="page-padding pb-20">
        <div className="masonry-grid">
          {sketchImages.map((sketch, i) => (
            <motion.div
              key={sketch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => lb.open(i)}
              className="masonry-item cursor-pointer group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={sketch.src}
                  alt={sketch.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-display text-lg">{sketch.title}</p>
                    <p className="text-white/70 text-xs">{sketch.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Lightbox images={images} index={lb.index} onClose={lb.close} onNavigate={lb.navigate} />
    </div>
  );
}
