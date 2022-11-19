import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { InputCustom } from "../../components/Form/InputCustom";
import HeaderCustom from "../../components/HeaderCustom";
import SidebarCustom from "../../components/SidebarCustom";
import { schema } from "../../schemas/FormCreateUser";
import { useForm, SubmitHandler } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function CreateUser() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreateUser: SubmitHandler<FormFields> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log(values);
  };

  return (
    <Box>
      <HeaderCustom />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarCustom />
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p="8"
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <InputCustom
                name="name"
                label="Nome completo"
                error={errors?.name}
                {...register("name")}
              />
              <InputCustom
                name="email"
                type="email"
                label="E-mail"
                error={errors?.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <InputCustom
                name="password"
                type="password"
                label="Senha"
                error={errors?.password}
                {...register("password")}
              />
              <InputCustom
                name="password_confirmation"
                type="password"
                label="Confirme sua senha"
                error={errors?.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha" disabled={isSubmitting}>
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
                Criar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
