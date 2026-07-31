import { motion } from 'framer-motion';
import { Download, Award, GraduationCap, Languages, BadgeCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';

const skills = [
  { name: 'AutoCAD', level: 95 },
  { name: '3ds Max', level: 85 },
  { name: 'SketchUp', level: 90 },
  { name: 'Lumion', level: 88 },
  { name: 'Sustainable Architecture', level: 85 },
  { name: 'Architectural Design', level: 90 },
  { name: 'Project Management', level: 80 },
];

const languages = ['Arabic', 'English'];

const education = [
  { degree: 'Bachelor of Architecture', school: 'Islamic University of Gaza', year: '2015 - 2022' },
];

const experience = [
  { company: 'MAS Group', year: '2022 - 2023', detail: 'Created 3D models and architectural renderings using SketchUp and Lumion.' },
  { company: 'Intrerubik Design', year: '2023 - 2025', detail: 'Led the design of 10+ high-rise buildings, with a focus on sustainability and project feasibility.' },
];

const philosophy = [
  'I create sustainable architectural solutions for residential and commercial projects.',
  'My work combines thoughtful design, detailed 3D visualization, and practical project coordination.',
  'I am passionate about innovative architecture that responds to context and human experience.',
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="page-padding pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="section-label">About</span>
            <h1 className="section-title mt-4 mb-6">Zaid Almasri</h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Creative and detail-oriented architect with 5+ years of experience in residential and commercial projects. Passionate about sustainable design and innovative architectural solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/Zaid-Almasri-CV.pdf" download className="btn-primary">
                <Download size={16} /> Download CV
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="/about.jpeg" alt="Zaid Almasri" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <Reveal className="max-w-4xl mx-auto">
          <span className="section-label">Design Philosophy</span>
          <h2 className="section-title mt-4 mb-10">What I Believe</h2>
          <div className="space-y-6">
            {philosophy.map((item, index) => (
              <Reveal key={item} delay={index * 0.1}>
                <p className="text-lg md:text-xl font-display font-light text-stone-700 dark:text-stone-300 leading-relaxed border-l-2 border-gold-500 pl-6">{item}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="page-padding py-20">
        <Reveal className="max-w-4xl mx-auto">
          <span className="section-label">Proficiency</span>
          <h2 className="section-title mt-4 mb-10">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.05}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{skill.name}</span>
                    <span className="text-sm text-stone-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-stone-200 dark:bg-stone-700 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }} className="h-full bg-gold-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="page-padding py-20 bg-stone-50 dark:bg-stone-900">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} className="text-gold-600 dark:text-gold-400" />
              <h3 className="font-display text-2xl font-medium text-stone-900 dark:text-stone-100">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="border-l-2 border-stone-200 dark:border-stone-700 pl-6">
                  <p className="font-medium text-stone-800 dark:text-stone-200">{item.degree}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{item.school}</p>
                  <p className="text-xs text-gold-600 dark:text-gold-400 mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck size={24} className="text-gold-600 dark:text-gold-400" />
              <h3 className="font-display text-2xl font-medium text-stone-900 dark:text-stone-100">Experience</h3>
            </div>
            <div className="space-y-5">
              {experience.map((job) => (
                <div key={job.company} className="flex items-start gap-3">
                  <Award size={16} className="text-gold-600 dark:text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-stone-800 dark:text-stone-200">{job.company}</p>
                    <p className="text-xs text-gold-600 dark:text-gold-400 mt-1">{job.year}</p>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">{job.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-padding py-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Languages size={24} className="text-gold-600 dark:text-gold-400" />
            <span className="section-label">Languages</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language) => <span key={language} className="px-6 py-3 border border-stone-300 dark:border-stone-700 text-sm text-stone-700 dark:text-stone-300">{language}</span>)}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
