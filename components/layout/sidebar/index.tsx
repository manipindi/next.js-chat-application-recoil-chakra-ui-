import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AddUserModal from "@/components/containers/modals/add-user-modal";
import dynamic from "next/dynamic";

const UsersContainer = dynamic(() => import('../../containers/users-container'), {
  ssr: false,
})

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();  

  return (
    <Box
      w={"400px"}
      h="100%"
      position="fixed"
      borderRight="0.01px solid #737373"
      p={"20px"}
      top='0px'
      left='0px'
      bg="app-bg"
    >
      <Flex justifyContent="space-between" flexDirection="column" gap="30px">
        <Flex justifyContent="space-between">
          <Text fontSize={"xl"} fontWeight="extrabold">
            Manikanta Pindi
          </Text>
          <Flex gap={"10px"}>
            <Button bg={"button-bg"} size={"sm"} onClick={onOpen}>
              Add &nbsp;
              <AddIcon boxSize={3} />
            </Button>
            <Button bg={"button-bg"} onClick={toggleColorMode} size={"sm"}>{colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}</Button>
          </Flex>
        </Flex>
        <UsersContainer />
        <AddUserModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
}
