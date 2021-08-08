import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidbar } from "../components/Sidbar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" marginY="6" maxWidth={1480} mx="auto" paddingX="6">
        <Sidbar />
      </Flex>
    </Flex>
  )
}