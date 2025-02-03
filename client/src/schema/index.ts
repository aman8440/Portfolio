import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Please enter your Email Address.")
    .email("Invalid Email Address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});