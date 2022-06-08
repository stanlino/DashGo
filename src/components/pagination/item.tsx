import { Button } from "@chakra-ui/react"

interface ItemProps {
  nummber: number
  isCurrent?: boolean
}

export function Item({ isCurrent = false, nummber }: ItemProps) {
  if (isCurrent) {
    return (
      <Button 
        size='sm'
        fontSize='xs'
        w='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {nummber}
      </Button>
    )
  }

  return (
    <Button 
      size='sm'
      fontSize='xs'
      w='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
    >
      {nummber}
    </Button>
  )
}