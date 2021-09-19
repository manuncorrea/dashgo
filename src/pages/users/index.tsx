import { 
  Box, 
  Flex,  
  Heading, 
  Button, 
  Icon, 
  Table, 
  Thead, 
  Tr, 
  Th, 
  Checkbox, 
  Tbody, 
  Td, 
  Text, 
  useBreakpointValue 
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return(
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} background="gray.800" padding="8">
          <Flex marginBottom="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuario</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/> }
              >
                Criar novo
              </Button>
            </Link>

          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Emanuele Correa</Text>
                    <Text fontSize="sm" color="gray.300">manuncorrea@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>14 de Abril de 2021</Td> }
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Emanuele Correa</Text>
                    <Text fontSize="sm" color="gray.300">manuncorrea@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>14 de Abril de 2021</Td> }
                
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Emanuele Correa</Text>
                    <Text fontSize="sm" color="gray.300">manuncorrea@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>14 de Abril de 2021</Td> }
              </Tr>

            </Tbody>

          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}