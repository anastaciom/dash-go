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
import Link from "next/link";
import React from "react";
import InputCustom from "../../components/Form/InputCustom";
import HeaderCustom from "../../components/HeaderCustom";
import SidebarCustom from "../../components/SidebarCustom";

export default function CreateUser() {
  return (
    <Box>
      <HeaderCustom />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarCustom />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <InputCustom name="name" label="Nome completo" />
              <InputCustom name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <InputCustom name="password" type="password" label="Senha" />
              <InputCustom
                name="password_confirmation"
                type="password"
                label="Confirme sua senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Criar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
