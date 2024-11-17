import * as Yup from "yup";
import * as VALIDATION from "@/src/share/validation/alerts";

export const emailValidateSchema = Yup.string()
  .required(VALIDATION.REQUIRED)
  .email();

const minLengthPassword = 6;
export const passwordValidateSchema = Yup.string()
  .required(VALIDATION.REQUIRED)
  .min(minLengthPassword, VALIDATION.LENGTH_MIN(minLengthPassword));
