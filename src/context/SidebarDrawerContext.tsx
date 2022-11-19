import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
