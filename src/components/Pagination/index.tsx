import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        {" "}
        <strong>0</strong> - <strong>10</strong> de <strong>110</strong>
      </Box>
      <HStack spacing="2">
        <PaginationButton isCurrentPage numberPage={1} />
        <PaginationButton numberPage={2} />
        <PaginationButton numberPage={3} />
        <PaginationButton numberPage={4} />
        <PaginationButton numberPage={5} />
        <PaginationButton numberPage={6} />
      </HStack>
    </HStack>
  );
}
