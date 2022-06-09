import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/sidebar_drawer";

import { Logo } from "./logo";
import { NotifcationNav } from "./notifications_nav";
import { Profile } from "./profile";
import { SearchBox } from "./search";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      align='center'
      px='6'
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <NotifcationNav />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}