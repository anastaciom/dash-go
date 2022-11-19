import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  isWideVersion: boolean;
}

export default function Profile({ isWideVersion = false }: ProfileProps) {
  return (
    <Flex align="center">
      {isWideVersion && (
        <Box mr="4" textAlign="right">
          <Text noOfLines={2}>Anastacio Menezes</Text>
          <Text color="gray.300" fontSize="sm">
            anastacio@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Anastacio Menezes"
        src="https://avatars.githubusercontent.com/u/80080840?v=4"
      />
    </Flex>
  );
}
