import { Flex } from "@chakra-ui/react";

import { Logo } from "./logo";
import { NotifcationNav } from "./notifications_nav";
import { Profile } from "./profile";
import { SearchBox } from "./search";

export function Header() {
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

      <SearchBox />

      <NotifcationNav />

      <Profile />
    </Flex>
  )
}