import * as Yup from "yup"
import { nameValidationSchema, emailValidateSchema, passwordValidateSchema } from "@/src/share/validation"

export const signUpSchema = Yup.object({
    name: nameValidationSchema,
    email: emailValidateSchema,
    password: passwordValidateSchema
})