export type ProgramLevel = 'Master\'s Degree' | 'Bachelor\'s Degree' | 'Diploma' | 'Certificate';

export interface UniversityProgram {
  id: string;
  university: string;
  country: string;
  title: string;
  level: ProgramLevel;
  duration: string;
  highlights: string[];
  image: string; // banner/thumb
  badge?: string; // e.g., CV Trusted, 6+ Specializations
  tag?: string; // e.g., 100% Flexible Learning
  cta?: string; // e.g., APPLY NOW
  href?: string; // Navigation link for the CTA button
}

export const universityPrograms: ReadonlyArray<UniversityProgram> = [
  {
    id: 'manipal-india',
    university: 'Manipal University',
    country: 'India',
    title: 'Global Online Programs',
    level: "Master's Degree",
    duration: '2 Years',
    highlights: ['NAAC A+ Accredited', 'Industry-Led Curriculum', 'Placement Assistance'],
    image: '/Images/Manipalimages/manipal01.png',
    badge: 'Top Ranked University',
    tag: 'Premium Education',
    cta: 'APPLY NOW',
    href: '/Landingpage/Manipal'
  },
  {
    id: 'shoolini-india',
    university: 'Shoolini University',
    country: 'India',
    title: 'World-Class Programs',
    level: "Master's Degree",
    duration: '2 Years',
    highlights: ['NAAC A+ Accredited', 'Research Excellence', 'Global Recognition'],
    image: '/Images/shoolini/shoolini01.png',
    badge: 'Top Ranked University',
    tag: 'Research Focus',
    cta: 'APPLY NOW',
    href: '/Landingpage/Shoolini'
  },
  {
    id: 'birchwood-usa',
    university: 'Birchwood University',
    country: 'USA',
    title: 'Global Online MBA Program',
    level: "Master's Degree",
    duration: '18 Months',
    highlights: ['Placement Assistance', 'CE|IFAPSC|CECU|QAHE|FDE'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    badge: 'CV Trusted • 6+ Specializations',
    tag: '',
    cta: 'APPLY NOW'
  },
  {
    id: 'edgewood-usa',
    university: 'Edgewood College',
    country: 'USA',
    title: 'Global Online MBA Program',
    level: "Master's Degree",
    duration: '18 Months',
    highlights: ['100% Flexible Learning', 'ACBSP and HLC Accredited Program'],
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&q=80&w=800',
    badge: '6+ Specializations',
    tag: 'Flexible Learning',
    cta: 'APPLY NOW'
  },
  {
    id: 'golden-gate-usa',
    university: 'Golden Gate University',
    country: 'USA',
    title: 'Global Online MBA Program',
    level: "Master's Degree",
    duration: '15 Months',
    highlights: ['WES Recognised'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800',
    badge: '5+ Specializations',
    tag: '#1 Program for Working Professionals',
    cta: 'APPLY NOW'
  },
  {
    id: 'liverpool-uk',
    university: 'Liverpool Business School',
    country: 'UK',
    title: 'Global Online MBA Program',
    level: "Master's Degree",
    duration: '18 Months',
    highlights: ['WES Recognized', 'Integrated with GenAI modules'],
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800',
    badge: '6+ Specializations',
    tag: '',
    cta: 'APPLY NOW'
  },
  {
    id: 'bimtech-india',
    university: 'BIMTECH',
    country: 'India',
    title: 'Post Graduate Diploma in Management',
    level: 'Diploma',
    duration: '2 Years',
    highlights: ['AACSB & AICTE accredited', 'Placement Assistance'],
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=800',
    badge: 'Dual Specializations',
    tag: '',
    cta: 'APPLY NOW'
  },
  {
    id: 'paris-france',
    university: 'Paris School of Business',
    country: 'France',
    title: 'Global Online MBA Program',
    level: "Master's Degree",
    duration: '1 year',
    highlights: ['AACSB|AMBA|EFMD|QAHE'],
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800',
    badge: '10+ Specializations',
    tag: 'Placement Assistance',
    cta: 'APPLY NOW'
  }
];


