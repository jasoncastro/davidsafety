import { Service, PortfolioItem, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Site Safety Management',
    description: 'Comprehensive risk assessments and daily monitoring to ensure 100% compliance with local and international safety standards.',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Residential Construction',
    description: 'Building modern, resilient Filipino homes ranging from townhouses to premium customized villas with enduring quality.',
    icon: 'Home'
  },
  {
    id: '3',
    title: 'Commercial Establishments',
    description: 'Full-scale construction for office buildings, retail spaces, and business hubs designed for structural integrity and aesthetics.',
    icon: 'Building2'
  },
  {
    id: '4',
    title: 'Condominium Fit-outs',
    description: 'Interior structural adjustments, renovations, and safety upgrades specifically tailored for high-rise condominium units.',
    icon: 'Layout'
  },
  {
    id: '5',
    title: 'Safety Training & Audits',
    description: 'Workforce safety certifications, protocol training, and third-party safety audits for an accident-free worksite.',
    icon: 'GraduationCap'
  },
  {
    id: '6',
    title: 'Project Management',
    description: 'End-to-end oversight of construction timelines, resource allocation, and quality assurance from blueprint to turnover.',
    icon: 'Briefcase'
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Makati Office Tower Renovation',
    category: 'Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Modern Villa in Alabang',
    category: 'Construction',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Safety Audit: Cebu Tech Park',
    category: 'Safety',
    imageUrl: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'BGC Commercial Complex',
    category: 'Construction',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'High-Rise Scaffolding Setup',
    category: 'Safety',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Luxury Condo Interior Build',
    category: 'Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Santos',
    role: 'Homeowner, Quezon City',
    content: 'David International transformed our vision into reality. The structural integrity and attention to safety were top-notch. Our family feels incredibly secure in our new home.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ricardo Lim',
    role: 'Operations Director, Nexa Corp',
    content: 'Their safety management consultants entirely revamped our site protocols. We recorded exactly zero incidents over an 18-month commercial build. Outstanding professional service.',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Reyes',
    role: 'Property Developer',
    content: 'Timely delivery, transparent communication, and premium build quality. They are now our preferred partner for all future condo fit-outs and residential projects.',
    rating: 4
  }
];
