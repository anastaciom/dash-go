import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  email: yup
    .string()
    .email("Opss... Isso não é um E-mail.")
    .required("E-mail obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Senha precisa ter no minimo 6 caracteres."),
  password_confirmation: yup
    .string()
    .required("Senha obrigatória.")
    .oneOf([yup.ref("password")], "Senha está incorreta"),
});
