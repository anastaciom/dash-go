import React from "react";
import { Stack } from "@chakra-ui/react";
import { RiContrast2Line, RiDashboard2Line } from "react-icons/ri";
import Section from "../Section";
import NavLink from "../Section/NavLink";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <Section sectionTitle="GERAL">
        <NavLink link="/dashboard" icon={RiDashboard2Line} name={"Dashboard"} />
        <NavLink link="/users" icon={RiContrast2Line} name={"Usuários"} />
      </Section>

      <Section sectionTitle="AUTOMAÇÃO">
        <NavLink link="/forms" icon={RiDashboard2Line} name={"Formulários"} />
        <NavLink link="/automation" icon={RiContrast2Line} name={"Usuários"} />
      </Section>
    </Stack>
  );
}
