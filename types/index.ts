import { z } from "zod";

export const signupUserSchema = z.object({
  name: z.string().min(4),
  phoneNo: z.string().min(10).max(10),
  email: z.string().email(),
  password: z.string().min(5).max(10),
});

export type signupUserType = z.infer<typeof signupUserSchema>;

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type loginUserType = z.infer<typeof loginUserSchema>;

export type updateUserType = Partial<typeof signupUserSchema>;

export const lostItemPostSchema = z.object({
  name: z.string().min(4),
  description: z.string().min(10),
  lostLocation: z.string().min(5),
  verficationQuestion: z.string().min(5),
  imageUrl: z.string(),
});

export type lostItemPostType = z.infer<typeof lostItemPostSchema>;

export const foundItemPostSchema = z.object({
  name: z.string().min(4),
  description: z.string().min(10),
  lostLocation: z.string().min(5),
  verficationQuestion: z.string().min(5),
  imageUrl: z.string(),
});

export type foundItemPostType = z.infer<typeof foundItemPostSchema>;

export const ResponseSchema = z.object({
  answer: z.string().min(10),
});

export type foundItemResponse = z.infer<typeof ResponseSchema>;

export type lostItemResponse = z.infer<typeof ResponseSchema>;
