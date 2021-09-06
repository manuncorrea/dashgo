import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Emanuele Correa</Text>
          <Text color="gray.300">
            manuncorrea@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Emanuele Correa" src="https://github.com/manuncorrea.png" />
    </Flex>
  );
}