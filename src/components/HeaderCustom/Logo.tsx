import { Text } from "@chakra-ui/react";
import React from "react";

export default function Logo() {
  return (
    <Text
      fontSize={["xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dash Go
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
