export const siteConfig = {
  name: "Arti Yoga Studio",
  instructor: "Arti",
  tagline: "Yoga that fits into your life.",
  subTagline:
    "Personalized yoga guidance and offline group classes designed to help you move better, breathe deeper and feel more balanced.",
  experience: "4+",
  url: "https://artiyog.ramannagar.in",

  contact: {
    phone: "+91 92438 63365",
    whatsapp: "919243863365",
    email: "aartinagar33@gmail.com",
  },

  social: {
    instagram: "https://www.instagram.com/artiyoga_studio33",
    instagramHandle: "@artiyoga_studio33",
    youtube: "https://youtube.com/@aartinagar33",
    facebook: "https://www.facebook.com/share/19QwrqhRw2/",
  },

  serviceAreas: ["Indore"],

  bookingEnabled: true,
  onlineClassesEnabled: false,
} as const;

export type SiteConfig = typeof siteConfig;
