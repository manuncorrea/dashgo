import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr, 
  Text 
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidbar } from "../../components/Sidbar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidbar />

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8" >
          <Flex marginBottom="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuario</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/> }
            >
              Criar novo
            </Button>

          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
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

                <Td>14 de Agosto, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}