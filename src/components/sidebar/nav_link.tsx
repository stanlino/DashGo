import { Icon, Link as ChakraLink, LinkProps as ChackraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../activeLink";

interface NavLinkProps extends ChackraLinkProps{
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' alignItems='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}