import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationButtonProps {
  numberPage: number;
  isCurrentPage?: boolean;
}

export default function PaginationButton({
  numberPage,
  isCurrentPage = false,
}: PaginationButtonProps) {
  return isCurrentPage ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: "pink.500", cursor: "default" }}
    >
      {numberPage}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bgColor: "gray.500" }}
    >
      {numberPage}
    </Button>
  );
}
