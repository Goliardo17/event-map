import * as Yup from "yup"
import { emailValidateSchema, passwordValidateSchema } from "@/src/share/validation"

export const signInSchema = Yup.object({
    email: emailValidateSchema,
    password: passwordValidateSchema
})