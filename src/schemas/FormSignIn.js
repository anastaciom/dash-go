import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Opss... Isso não é um E-mail.")
    .required("E-mail obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Senha precisa ter no minimo 6 caracteres."),
});
