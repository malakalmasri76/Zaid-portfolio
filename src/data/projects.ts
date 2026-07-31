export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior Design' | 'Landscape' | 'Competitions' | 'Concept Designs';
  location: string;
  year: number;
  area?: string;
  client?: string;
  shortDescription: string;
  concept: string;
  challenge: string;
  solution: string;
  coverImage: string;
  software: string[];
  images: {
    exterior?: string[];
    interior?: string[];
    floorPlans?: string[];
    sketches?: string[];
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'skyline-villa',
    title: 'Skyline Villa',
    category: 'Residential',
    location: 'Ramallah, Palestine',
    year: 2024,
    area: '680 m²',
    shortDescription: 'A contemporary hillside residence that blurs the line between architecture and landscape.',
    concept: 'Inspired by the terraced hillside topography of the region, this villa cascades down the slope in a series of horizontal planes, each framing a different panoramic view.',
    challenge: 'Integrating a large modern residence into a sensitive hillside site while maintaining privacy, maximizing views, and respecting the existing landscape.',
    solution: 'A series of staggered terraces creates a natural transition from built form to landscape. The roofs of lower levels become gardens for upper levels, embedding the structure into the hill.',
    coverImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['AutoCAD', 'SketchUp', 'Lumion', 'Photoshop'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      interior: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
    featured: true,
  },
  {
    id: 'commerce-tower',
    title: 'Commerce Tower',
    category: 'Commercial',
    location: 'Gaza, Palestine',
    year: 2023,
    area: '4,200 m²',
    shortDescription: 'A high-rise mixed-use tower embodying modern commerce with sustainability at its core.',
    concept: 'Designed as a vertical city, the tower integrates offices, retail, and public spaces in a seamless vertical sequence, with a green facade that acts as a living skin.',
    challenge: 'Creating a landmark that responds to the local climate with high solar exposure, while providing comfortable workspaces that minimize energy consumption.',
    solution: 'A double-skin facade with integrated shading fins reduces solar gain by 40%. Wind tunnels at mid-levels provide natural ventilation to common areas.',
    coverImage: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['AutoCAD', 'Revit', 'Lumion', 'Rhino', 'Photoshop'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      interior: [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
    featured: true,
  },
  {
    id: 'zen-interior',
    title: 'Zen Living Space',
    category: 'Interior Design',
    location: 'Ramallah, Palestine',
    year: 2024,
    area: '320 m²',
    shortDescription: 'A minimalist interior that transforms a raw apartment into a serene sanctuary of calm.',
    concept: 'Rooted in the Japanese concept of Ma — the power of negative space — this interior breathes simplicity, allowing light, texture, and the inhabitant\'s life to fill the space.',
    challenge: 'Working within existing structural constraints to create an open-plan living experience that flows naturally while maintaining acoustic and visual privacy.',
    solution: 'Sliding Japanese-inspired panels replace fixed walls, allowing the space to be reconfigured for different moods and occasions. Natural stone, timber, and linen create warmth within strict minimalism.',
    coverImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['SketchUp', 'Lumion', 'Photoshop'],
    images: {
      interior: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
    featured: true,
  },
  {
    id: 'coastal-retreat',
    title: 'Coastal Retreat',
    category: 'Residential',
    location: 'Gaza Coast, Palestine',
    year: 2023,
    area: '450 m²',
    shortDescription: 'A waterfront residence designed to frame the sea horizon at every turn.',
    concept: 'Every room is a frame for the sea. Long horizontal lines, floor-to-ceiling glass, and a muted palette allow the Mediterranean to become the primary architectural element.',
    challenge: 'Designing against a harsh coastal environment — salt air, strong winds, and intense solar radiation — without compromising on openness and the connection to water.',
    solution: 'Marine-grade materials throughout, deep overhangs that protect openings from direct sun while allowing panoramic views. The structure is elevated to address flood risk and capture sea breezes.',
    coverImage: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['AutoCAD', 'SketchUp', 'Lumion'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      interior: [
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
  },
  {
    id: 'cultural-pavilion',
    title: 'Cultural Pavilion',
    category: 'Competitions',
    location: 'Amman, Jordan',
    year: 2023,
    area: '1,800 m²',
    shortDescription: 'Competition entry for a public cultural center celebrating Arab architectural heritage.',
    concept: 'An abstraction of the traditional mashrabiya lattice at an architectural scale — the entire building\'s skin is a parametric variation of this centuries-old pattern, casting intricate shadow patterns throughout the day.',
    challenge: 'Balancing the brief\'s demand for flexible exhibition spaces with a strong architectural identity rooted in regional heritage.',
    solution: 'A central flexible hall opens to a semi-outdoor courtyard, forming the cultural heart of the complex. The perforated shell wraps both, unifying them under one identity.',
    coverImage: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['Rhino', 'AutoCAD', 'Lumion', 'Photoshop'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
    featured: true,
  },
  {
    id: 'urban-garden',
    title: 'Urban Garden District',
    category: 'Landscape',
    location: 'Ramallah, Palestine',
    year: 2022,
    area: '5,600 m²',
    shortDescription: 'A public landscape intervention transforming an underused urban lot into a community green lung.',
    concept: 'Inspired by the Palestinian olive grove, a grid of trees provides a rhythmic structure to the landscape, with program woven between the trunks — seating, play, and gathering spaces.',
    challenge: 'Creating a meaningful public space with a constrained budget on a challenging irregular site, ensuring year-round usability.',
    solution: 'Native planting for low maintenance, solar-powered lighting integrated into seating elements, and a subtle grading strategy that channels rainwater into bioswales, nurturing the planted areas.',
    coverImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['AutoCAD', 'SketchUp', 'Photoshop'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
  },
  {
    id: 'woven-house',
    title: 'Woven House',
    category: 'Concept Designs',
    location: 'Conceptual',
    year: 2024,
    area: '280 m²',
    shortDescription: 'A speculative residential typology exploring the fusion of structural expression and domestic warmth.',
    concept: 'What if a house could be woven? Inspired by traditional basketry, this concept explores interlocking structural ribs as both the load-bearing system and the spatial organizer.',
    challenge: 'Pushing the boundaries of form while maintaining habitability, light, and a sense of human scale.',
    solution: 'Parametric modeling allowed testing hundreds of variations. The final form achieves structural efficiency through curvature, with apertures shaped to optimize daylighting throughout the day.',
    coverImage: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['Rhino', 'SketchUp', 'Lumion', 'Photoshop'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      interior: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
  },
  {
    id: 'medical-center',
    title: 'Medical Center',
    category: 'Commercial',
    location: 'Gaza, Palestine',
    year: 2022,
    area: '3,100 m²',
    shortDescription: 'A healing-centered medical facility where architecture becomes part of the therapeutic experience.',
    concept: 'Evidence-based design principles inform every decision — biophilic elements, natural light in patient areas, and clear wayfinding reduce stress and aid recovery.',
    challenge: 'Strict medical planning requirements while creating a space that feels welcoming rather than clinical, within a tight urban lot.',
    solution: 'An internal healing garden brings nature into the center of the plan, distributing light and greenery to key patient-facing areas. Materials are warm and tactile throughout.',
    coverImage: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1600',
    software: ['AutoCAD', 'Revit', 'SketchUp'],
    images: {
      exterior: [
        'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      interior: [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
    },
  },
];

export const sketchImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Facade Study',
    description: 'Early concept exploration',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Site Plan Sketch',
    description: 'Urban context analysis',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800',
    title: 'Spatial Sequence',
    description: 'Interior flow diagram',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Detail Section',
    description: 'Structural junction study',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Volume Study',
    description: 'Massing exploration',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Light & Shadow',
    description: 'Solar analysis sketch',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Perspective Sketch',
    description: 'Eye-level visualization',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Program Diagram',
    description: 'Functional relationships',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Concept Collage',
    description: 'Mood and inspiration',
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Roof Garden Study',
    description: 'Landscape integration',
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Circulation Diagram',
    description: 'Movement through space',
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Material Palette',
    description: 'Surface and texture study',
  },
];
