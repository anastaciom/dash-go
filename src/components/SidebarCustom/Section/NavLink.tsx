import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ElementType } from "react";
import ActiveLink from "../../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  name: string;
  link: string;
}

export default function NavLink({ icon, name, link, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={link} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
