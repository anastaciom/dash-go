import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiEdit2Line } from "react-icons/ri";
import HeaderCustom from "../../components/HeaderCustom";
import Pagination from "../../components/Pagination";
import SidebarCustom from "../../components/SidebarCustom";

export default function UsersList() {
  return (
    <Box>
      <HeaderCustom />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarCustom />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="xl" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"> </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Anastacio Menezes</Text>
                    <Text fontSize="sm" color="gray.300">
                      anastaciomenezes11@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril</Td>
                <Td>
                  {" "}
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                    <Icon as={RiEdit2Line} />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
