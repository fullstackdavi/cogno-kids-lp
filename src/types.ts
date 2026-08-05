export interface Testimonial {
  id: string;
  name: string;
  role: string;
  childAge: string;
  city: string;
  avatar: string;
  text: string;
  stars: number;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  color: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: string;
  description: string;
  tag: string;
}

export interface ActivityPack {
  id: string;
  title: string;
  ageGroup: string;
  category: 'coloring' | 'logic' | 'motor' | 'games';
  previewSvg: string;
  description: string;
}
