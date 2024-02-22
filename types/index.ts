import { z } from "zod";

export const signupUserSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be minimum 4 characters long" }),
  phoneNo: z
    .string()
    .min(10, { message: "Phone no must be 10 digits long" })
    .max(10, { message: "Phone no must be minimum 10 digits long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be minimum 5 characters long" })
    .max(10, { message: "Password must be at max 10 characters long" }),
});

export type signupUserType = z.infer<typeof signupUserSchema>;

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type loginUserType = z.infer<typeof loginUserSchema>;

export type updateUserType = Partial<typeof signupUserSchema>;

export const userProfileSchema = z.object({
  name: z.string(),
  phoneNo: z.string(),
  email: z.string().email(),
});

export type userProfileType = z.infer<typeof userProfileSchema>;

export const lostItemPostSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Item name must be minimum 4 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description must be minimum 10 characters long" }),
  lostLocation: z
    .string()
    .min(7, { message: "Lost location must be minimum 7 characters long" }),
  verficationQuestion: z
    .string()
    .min(10, { message: "Question must be minimum 10 characters long" }),
  imageUrl: z.string(),
});

export type lostItemPostType = z.infer<typeof lostItemPostSchema>;

export const foundItemPostSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Item name must be minimum 4 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description must be minimum 10 characters long" }),
  lostLocation: z
    .string()
    .min(7, { message: "Lost location must be minimum 7 characters long" }),
  verficationQuestion: z
    .string()
    .min(5, { message: "Question must be minimum 5 characters long" }),
  imageUrl: z.string(),
});

export type foundItemPostType = z.infer<typeof foundItemPostSchema>;

export const ResponseSchema = z.object({
  answer: z
    .string()
    .min(5, { message: "Response must be minimum 5 characters long" }),
});

export type foundItemResponse = z.infer<typeof ResponseSchema>;

export type lostItemResponse = z.infer<typeof ResponseSchema>;
