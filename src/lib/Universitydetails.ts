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
    id: 'amity-university',
    university: 'Amity University',
    country: 'India',
    title: 'Innovative Online Programs',
    level: "Bachelor's Degree",
    duration: '3 Years',
    highlights: ['Industry Collaboration', 'State-of-the-Art Infrastructure', 'Global Alumni Network'],
    image: '/Images/amity/amity01.jpg',
    badge: 'Top Ranked University',
    tag: 'Innovative Learning',
    cta: 'APPLY NOW',
    href: '/Landingpage/Amity'
  },{
   id: 'DY-Patil-university',
   university: 'DY Patil University',
   country: 'India',
   title: 'Cutting-Edge Online Programs',
   level: "Bachelor's Degree",
   duration: '3 Years',
   highlights: ['Industry Integration', 'Modern Facilities', 'Vibrant Campus Life'],
   image: '/Images/DY/dy1.jpg',
   badge: 'Top Ranked University',
   tag: 'Cutting-Edge Learning',
   cta: 'APPLY NOW',
   href: '/Landingpage/DY'
 },
 {
   id: 'LPU-university',
   university: 'Lovely Professional University',
   country: 'India',
   title: 'Comprehensive Online Programs',
   level: "Bachelor's Degree",
   duration: '3 Years',
   highlights: ['NAAC A++ Accredited', 'Industry Partnerships', 'Global Recognition'],
   image: '/Images/LPU/lpu1.jpg',
   badge: 'Top Ranked University',
   tag: 'Excellence in Education',
   cta: 'APPLY NOW',
   href: '/Landingpage/LPU'
 },
 {
   id: 'Uttranchal-university',
   university: 'Uttranchal University',
   country: 'India',
   title: 'Quality Education Programs',
   level: "Bachelor's Degree",
   duration: '3 Years',
   highlights: ['NAAC Accredited', 'Modern Infrastructure', 'Industry Focused'],
   image: '/Images/Uttranchal/uttranchal1.png',
   badge: 'Recognized University',
   tag: 'Quality Education',
   cta: 'APPLY NOW',
   href: '/Landingpage/Uttranchal'
 }
 ,{
  id: 'NMIMS-university',
  university: 'NMIMS University',
  country: 'India',
  title: 'Dynamic Online Programs',
  level: "Master's Degree",
  duration: '2 Years',
  highlights: ['Industry-Relevant Curriculum', 'Experienced Faculty', 'Global Exposure'],
  image: '/Images/NMIMS/nmims01.png',
  badge: 'Top Ranked University',
  tag: 'Dynamic Learning',
  cta: 'APPLY NOW',
  href: '/Landingpage/NMIMS'
 }
];


