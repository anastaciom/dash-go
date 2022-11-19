import { Flex, Button, Stack } from "@chakra-ui/react";
import { InputCustom } from "../components/Form/InputCustom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schemas/FormSignIn";

type FormFields = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn: SubmitHandler<FormFields> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        gap={4}
        noValidate
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <InputCustom
            name="email"
            type="email"
            placeholder="E-mail"
            error={errors?.email}
            {...register("email")}
          />
          <InputCustom
            name="password"
            type="password"
            placeholder="Senha"
            error={errors?.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
          disabled={!isDirty}
        >
          {!isDirty ? "Preencha os campos" : "Entrar"}
        </Button>
      </Flex>
    </Flex>
  );
}
