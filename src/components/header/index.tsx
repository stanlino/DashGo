import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./logo";
import { NotifcationNav } from "./notifications_nav";
import { Profile } from "./profile";
import { SearchBox } from "./search";

export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      <Logo />

      {isWideVersion && <SearchBox />}

      <NotifcationNav />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}