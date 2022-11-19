import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import Logo from "./Logo";
import Notifications from "./Notifications";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function HeaderCustom() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="open Menu"
          icon={<Icon as={RiMenuLine} mt="2" />}
          variant="unstyled"
          fontSize="24"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <Notifications />
        <Profile isWideVersion={isWideVersion} />
      </Flex>
    </Flex>
  );
}
