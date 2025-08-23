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

// Task Schema

// Include the current day
const today = new Date();
today.setHours(0, 0, 0, 0);

const taskDataSchema = z.object({
    id: z.string(),
    title: z.string({ message: error.missingField }).min(8, { message: error.minCharEmail}).max(50, { message: error.maxChar }).regex(regex.taskRegex, { message: error.invalidInput}),
    description: z.string({ message: error.missingField }).max(500, { message: error.maxChar }).regex(regex.taskRegex, { message: error.invalidInput}).optional(),
    priority: z.number().min(1 ,{ message: error.default }).max(2, { message: error.default }),
    date: z.date({ message: error.missingField}).min(today, { message: error.invalidDate }),
    done: z.boolean( { message: error.default }),
    picture: z.string().min(10, { message: error.invalidPicture }).max(1000, { message: error.maxChar }),
});

export const addTaskValidation = taskDataSchema.omit({ id: true, done: true, picture: true });