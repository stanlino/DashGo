import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Stanley Filipe</Text>
        <Text color='gray.300' fontSize='sm'>stanley92filipe@gmail.com</Text>
      </Box>
      <Avatar 
        size='md'
        name='Stanley Filipe'
        src='https://github.com/stanlino.png'
      />
    </Flex>
  )
}