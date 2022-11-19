import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface SectionProps {
  sectionTitle: string;
  children: ReactNode;
}

export default function Section({ sectionTitle, children }: SectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {sectionTitle}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
