import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/5] bg-stone-100 dark:bg-stone-900">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="text-xs tracking-widest2 uppercase text-gold-400 mb-2 block">{project.category}</span>
            <h3 className="font-display text-2xl md:text-3xl font-light mb-2">{project.title}</h3>
            <p className="text-sm text-white/80 max-w-md mb-3 line-clamp-2">{project.shortDescription}</p>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5"><MapPin size={12} />{project.location}</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} />{project.year}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}