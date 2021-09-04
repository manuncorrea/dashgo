import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align="center">
    <Box marginRight="4" textAlign="right">
        <Text>Emanuele Correa</Text>
        <Text color="gray.300" fontSize="small">manu@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Emanuele Correa" src="https://github.com/manuncorrea.png" />
    </Flex>
  )
}