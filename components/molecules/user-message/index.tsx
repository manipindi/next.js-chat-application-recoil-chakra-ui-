import UserIcon from "@/components/atoms/user-icon";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function UserMessage({ message }: any) {
  return (
    <Flex alignItems={"center"} gap="10px" justifyContent={"flex-end"}>
      <Flex h={"32px"} bg="user-hover-bg" justifyContent={"center"} borderRadius={"8px 0 8px 8px"} p={"5px 10px"}>
        <Text fontSize={"sm"} color="dark.text-color">
          {message}
        </Text>
      </Flex>
      <UserIcon src="https://bit.ly/dan-abramov" size={"sm"} />
    </Flex>
  );
}
