import { Flex, Input, Button, Stack } from "@chakra-ui/react";
import InputCustom from "../components/Form/InputCustom";

export default function SignIn() {
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
      >
        <Stack spacing={4}>
          <InputCustom name="email" type="email" placeholder="E-mail" />
          <InputCustom name="password" type="password" placeholder="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
