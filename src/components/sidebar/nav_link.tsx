import { Icon, Link, LinkProps as ChackraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChackraLinkProps{
  icon: ElementType
  children: string
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  )
}