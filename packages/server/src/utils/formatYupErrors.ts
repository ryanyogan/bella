import { ValidationError } from "yup";

interface YupError {
  path: string;
  message: string;
}

export const formatYupError = (error: ValidationError): YupError[] =>
  error.inner.map(
    (error: ValidationError): YupError => ({
      path: error.path,
      message: error.message
    })
  );
