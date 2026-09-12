export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  available: boolean;
  comingSoon?: boolean;
  highlight?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  sessionType: "group" | "personal";
  avatar?: string;
};

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "teaching" | "group" | "personal" | "event";
  width: number;
  height: number;
};

export type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  sessionType: "group" | "personal" | "other";
  preferredDate?: string;
  preferredTime?: string;
  experienceLevel: "beginner" | "some" | "intermediate" | "advanced";
  message?: string;
};

export type RecommenderOption = {
  id: string;
  label: string;
  recommendation: "group" | "personal";
};

export type NavItem = {
  label: string;
  href: string;
};
