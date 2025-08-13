import { z } from "zod";

import error from "../assets/data/error.json";
import { regex } from "../utils/regex";

// User Schema
const accountDataSchema = z.object({
    id: z.string(),
    isAdmin: z.boolean().default(false),
    email: z.string({ message: error.missingField }).min(8, { message: error.minCharEmail }).max(150, { message: error.maxChar }).regex(regex.emailRegex, { message: error.invalidEmail}),
    password: z.string({ message: error.missingField }).min(12, { message: error.minCharPassword }).max(150, { message: error.maxChar }),
    confirmPassword: z.string({ message: error.missingField }).min(12, { message: error.minCharPassword }).max(150, { message: error.maxChar }).regex(regex.passwordRegex, { message: error.invalidPassword}),
    pseudo: z.string().min(3, { message: error.minCharPseudo }).max(30, { message: error.maxChar }),
    picture: z.string().min(10, { message: error.invalidPicture }).max(1000, { message: error.maxChar }),
});

export const resolverSchema = accountDataSchema.pick({ email: true, password: true, confirmPassword: true });
export const accountValidationSchema = accountDataSchema.pick({ email: true, password: true });