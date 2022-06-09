import { Stack } from "@chakra-ui/react";
import { 
  RiContactsLine, 
  RiDashboardLine, 
  RiGitMergeLine, 
  RiInputMethodLine
} from "react-icons/ri";
import { NavLink } from "./nav_link";
import { NavSection } from "./nav_section";

export function Nav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GERAL'>
        <NavLink icon={RiDashboardLine}>DASHBOARD</NavLink>
        <NavLink icon={RiContactsLine}>USUÁRIOS</NavLink>
      </NavSection>

      <NavSection title='AUTOMAÇÃO'>
        <NavLink icon={RiInputMethodLine}>FORMULÁRIOS</NavLink>
        <NavLink icon={RiGitMergeLine}>AUTOMAÇÃO</NavLink>
      </NavSection>
    </Stack>
  )
}