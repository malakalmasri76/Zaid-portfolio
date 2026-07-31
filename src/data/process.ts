import { MessageCircle, MapPin, Pencil, Box, FileText, HardHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation',
    description: 'We begin with a detailed conversation to understand your vision, needs, lifestyle, and aspirations. This phase sets the foundation for everything that follows.',
    duration: '1–2 weeks',
    deliverables: ['Design Brief', 'Project Scope', 'Initial Budget Estimate'],
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Site Analysis',
    description: 'A thorough analysis of the site — topography, climate, views, sun path, existing conditions, and local context — to ensure the design responds intelligently to its place.',
    duration: '1–2 weeks',
    deliverables: ['Site Survey', 'Context Study', 'Environmental Analysis'],
  },
  {
    number: '03',
    icon: Pencil,
    title: 'Concept Design',
    description: 'The core idea takes shape. We explore multiple conceptual directions, test spatial arrangements, and refine the design language until the right solution emerges.',
    duration: '3–5 weeks',
    deliverables: ['Concept Sketches', 'Space Planning', 'Design Narrative'],
  },
  {
    number: '04',
    icon: Box,
    title: '3D Visualization',
    description: 'Photorealistic 3D renders and walkthroughs that allow you to experience the project before a single brick is laid — enabling informed decisions on every detail.',
    duration: '2–4 weeks',
    deliverables: ['Exterior Renders', 'Interior Renders', 'Walkthrough Video'],
  },
  {
    number: '05',
    icon: FileText,
    title: 'Construction Drawings',
    description: 'A comprehensive set of technical drawings — floor plans, sections, elevations, details, and specifications — that communicate the design precisely to contractors.',
    duration: '4–8 weeks',
    deliverables: ['Working Drawings', 'Detail Drawings', 'Specifications', 'Permit Documents'],
  },
  {
    number: '06',
    icon: HardHat,
    title: 'Project Supervision',
    description: 'Regular site visits to monitor progress, resolve issues, ensure quality matches the design intent, and keep the project on schedule and on budget.',
    duration: 'Duration of construction',
    deliverables: ['Site Reports', 'Quality Inspections', 'As-Built Drawings'],
  },
];
