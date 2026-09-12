import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppUrl(number: string, message?: string): string {
  if (!number) return "#";
  const encoded = message ? encodeURIComponent(message) : encodeURIComponent(
    "Hi Arti, I'm interested in yoga sessions. Can you share more details?"
  );
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildCallUrl(phone: string): string {
  if (!phone) return "#";
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function buildMailUrl(email: string): string {
  if (!email) return "#";
  return `mailto:${email}`;
}
