import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true } : ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Stanley Filipe</Text>
          <Text color='gray.300' fontSize='sm'>stanley92filipe@gmail.com</Text>
        </Box>
      )}
      <Avatar 
        size='md'
        name='Stanley Filipe'
        src='https://github.com/stanlino.png'
      />
    </Flex>
  )
}