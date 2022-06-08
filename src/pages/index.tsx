import { 
  Button, 
  Flex, 
  FormControl,
  FormLabel, 
  Stack 
} from "@chakra-ui/react";
import { Input } from "../components/form/input";

export default function SignIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>

          <Input 
            type='email'
            name='email'
            label='E-mail'
          />

          <Input 
            type='password'
            name='password'
            label='Password'
          />

          <Button
            type='submit'
            size='lg'
            colorScheme="pink"
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
