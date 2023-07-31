import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string({
      required_error: "The username is required.",
      invalid_type_error: "The username must be a string.",
    })
    .min(1)
    .max(255),
  email: z
    .string({
      required_error: "The email is required",
      invalid_type_error: "The email must be a string",
    })
    .email({
      message: "The email is not valid",
    }),
  password: z
    .string({
      required_error: "The password is required",
      invalid_type_error: "The password must be a string",
    })
    .min(6,{
      message: "The password must be at least 6 characters",
    })
    .max(255),
});

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "The email is required",
      invalid_type_error: "The email must be a string",
    })
    .email({
      message: "The email is not valid",
    }),
  password: z
    .string({
      required_error: "The password is required",
      invalid_type_error: "The password must be a string",
    })
    .min(6,{
      message: "The password must be at least 6 characters",
    })
    .max(255),
});
