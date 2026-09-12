import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  sessionType: z.enum(["group", "personal", "other"], "Please select a session type"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  experienceLevel: z.enum(["beginner", "some", "intermediate", "advanced"], "Please select your experience level"),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type BookingSchema = z.infer<typeof bookingSchema>;
