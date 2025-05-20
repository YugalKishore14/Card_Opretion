const { z } = require('zod');

//  creating a schema for validating user signup data
const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: " Username must be at least 3 characters long" })
        .max(20, { message: "Username must be at most 20 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(10, { message: " Email must be at least 10 characters long" })
        .max(35, { message: "Email must be at most 35 characters long" }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: " Phone must be at 10 number" })
        .max(10, { message: "Phone must be at most 10 number long" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(5, { message: " Password must be at least 5 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(10, { message: " Email must be at least 10 characters long" })
        .max(35, { message: "Email must be at most 35 characters long" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(5, { message: " Password must be at least 5 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
})

module.exports = { signupSchema, loginSchema };