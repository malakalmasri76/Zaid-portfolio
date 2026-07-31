import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { useProjects } from "@/hooks/useProjects";


const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "High-Rise Buildings" },
  { value: "2", label: "Design Studios" },
  { value: "3D", label: "Design & Rendering" },
];

export default function Home() {
  const { projects, loading, error } = useProjects();
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home.jpg"
            alt="Architecture"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white page-padding">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs tracking-widest3 uppercase text-gold-400 mb-6"
          >
            Architect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          >
            Designing spaces
            <br />
            that inspire people.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 tracking-wide"
          >
            A creative architecture practice crafting 
            residential and commercial design,
            passionate about sustainable and
            innovative solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-stone-900"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-light text-gold-600 dark:text-gold-400 mb-2">
                {s.value}
              </p>
              <p className="text-xs tracking-widest2 uppercase text-stone-500 dark:text-stone-400">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="page-padding py-30">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="section-label">Philosophy</span>
            <h2 className="section-title mt-4 mb-8">
              Architecture is not just about buildings.
              <br />
              It's about the spaces between them.
            </h2>
            <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              Every project begins with a question: how can this space elevate
              the human experience? The answer unfolds through careful
              listening, rigorous analysis, and a commitment to craft that
              honors both the site and the people who will inhabit it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="page-padding py-20">
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="section-title mt-4">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-sm tracking-wider uppercase text-stone-600 dark:text-stone-400 hover:text-gold-600 transition-colors"
          >
            All Projects <ArrowRight size={16} />
          </Link>
        </Reveal>
        {loading ? (
          <div className="text-center text-stone-500">
            Loading featured projects…
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Unable to load featured projects right now.
          </div>
        ) : featured.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center text-stone-500">
            No featured projects available.
          </div>
        )}
        <div className="md:hidden mt-8 text-center">
          <Link to="/projects" className="btn-outline">
            All Projects
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <Reveal className="text-center mb-12">
          <span className="section-label">What I Do</span>
          <h2 className="section-title mt-4">Services</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 0.1}>
              <div className="p-8 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 card-hover h-full">
                <s.icon
                  size={32}
                  className="text-gold-600 dark:text-gold-400 mb-6"
                  strokeWidth={1.2}
                />
                <h3 className="font-display text-xl font-medium mb-3 text-stone-900 dark:text-stone-100">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-outline">
            All Services
          </Link>
        </div>
      </section>

      {/* Process Preview */}
      <section className="page-padding py-20">
        <Reveal className="text-center mb-16">
          <span className="section-label">How I Work</span>
          <h2 className="section-title mt-4">Design Process</h2>
        </Reveal>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700 -translate-x-1/2" />
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={0.1}
              className={`relative flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-12`}
            >
              <div
                className={`md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
              >
                <div
                  className="flex items-center gap-4 mb-3"
                  style={i % 2 === 0 ? { justifyContent: "flex-end" } : {}}
                >
                  <span className="font-display text-4xl text-gold-600 dark:text-gold-400">
                    {step.number}
                  </span>
                  <step.icon
                    size={24}
                    className="text-stone-400"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="font-display text-2xl font-medium mb-2 text-stone-900 dark:text-stone-100">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/process" className="btn-outline">
            Full Process
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="page-padding py-30 bg-stone-950">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">
            Let's create something extraordinary together. Every great space
            starts with a conversation.
          </p>
          <Link to="/contact" className="btn-gold">
            Start a Project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
