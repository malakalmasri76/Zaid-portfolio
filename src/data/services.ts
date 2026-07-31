import { Building2, Home, Sofa, Trees, Lightbulb, Monitor, FileText, HardHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Design',
    description: 'Custom homes and residential spaces crafted to reflect the unique identity and lifestyle of each client.',
    features: ['Custom Home Design', 'Villa & Compound Planning', 'Renovation & Extension', 'Sustainable Homes'],
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Design',
    description: 'High-performance commercial buildings that balance aesthetic ambition with functional precision.',
    features: ['Office Buildings', 'Mixed-Use Towers', 'Retail Spaces', 'Hospitality Design'],
  },
  {
    id: 'interior',
    icon: Sofa,
    title: 'Interior Design',
    description: 'Thoughtful interior environments where every material, detail, and proportion is deliberately considered.',
    features: ['Residential Interiors', 'Commercial Fit-Out', 'Furniture Layout', 'Material Specification'],
  },
  {
    id: 'landscape',
    icon: Trees,
    title: 'Landscape Design',
    description: 'Outdoor spaces designed as extensions of the architecture — places for contemplation, gathering, and nature.',
    features: ['Garden Design', 'Public Plazas', 'Rooftop Gardens', 'Landscape Masterplanning'],
  },
  {
    id: 'concept',
    icon: Lightbulb,
    title: 'Concept Development',
    description: 'Creative concept design and feasibility studies that translate a vision into a compelling architectural proposition.',
    features: ['Design Briefs', 'Feasibility Studies', 'Competition Entries', 'Masterplanning'],
  },
  {
    id: 'visualization',
    icon: Monitor,
    title: 'Architectural Visualization',
    description: 'Photo-realistic 3D renders and animations that bring unbuilt projects to life with stunning clarity.',
    features: ['3D Exterior Renders', '3D Interior Renders', 'Walkthrough Animations', 'Virtual Tours'],
  },
  {
    id: 'drawings',
    icon: FileText,
    title: 'Construction Drawings',
    description: 'Precise, comprehensive technical documentation sets ready for permit submission and site construction.',
    features: ['Working Drawings', 'Detail Drawings', 'Permit Documentation', 'As-Built Drawings'],
  },
  {
    id: 'supervision',
    icon: HardHat,
    title: 'Site Supervision',
    description: 'On-site oversight ensuring the design intent is faithfully realized throughout the construction process.',
    features: ['Site Visits', 'Quality Control', 'Contractor Coordination', 'Progress Reporting'],
  },
];
