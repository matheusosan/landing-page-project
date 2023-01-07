import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("A confirmação da senha é obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem coincidir"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>
      <label>
        Email
        <input type="text" {...register("email")} />
        <span>{errors.email?.message}</span>
      </label>
      <label>
        Senha
        <input type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
      </label>
      <label>
        Confirmar senha
        <input type="password" {...register("confirmPassword")} />
        <span>{errors.confirmPassword?.message}</span>
      </label>
      <button type="submit">Submit</button>
    </FormContainer>
  );
};

export default Form;
