import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "group",
    title: "Group Yoga Classes",
    subtitle: "Practice Together",
    description:
      "Join a welcoming group of like-minded people and build a consistent yoga practice. Suitable for all levels, with a focus on alignment, breathing and mindful movement.",
    features: [
      "Beginner friendly",
      "Offline sessions",
      "Small group environment",
      "Flexible location",
      "Consistent schedule",
      "Community support",
    ],
    cta: "Join a Group Class",
    ctaHref: "#contact",
    available: true,
    highlight: false,
  },
  {
    id: "personal",
    title: "Personal Home Visit",
    subtitle: "One-on-One Attention",
    description:
      "Experience yoga designed entirely around you. Arti visits your home and creates a practice tailored to your body, goals and schedule.",
    features: [
      "Fully personalized practice",
      "Arti comes to your home",
      "Flexible scheduling",
      "Individual goals & pace",
      "Private, comfortable environment",
      "Faster progress",
    ],
    cta: "Book Personal Session",
    ctaHref: "#contact",
    available: true,
    highlight: true,
  },
  {
    id: "online",
    title: "Online Yoga",
    subtitle: "Coming Soon",
    description:
      "Live online classes and recorded sessions are being planned. Join the waitlist to be notified when online sessions become available.",
    features: [
      "Live online classes",
      "Recorded sessions",
      "Practice from anywhere",
      "Flexible timing",
    ],
    cta: "Join Waitlist",
    ctaHref: "#contact",
    available: false,
    comingSoon: true,
  },
];
