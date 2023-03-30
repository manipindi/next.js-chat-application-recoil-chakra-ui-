import UserIcon from "@/components/atoms/user-icon";
import { activeUserAtom } from "@/recoil/atoms/active-user/active-user-atom";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";

export default function UserChatHeader() {
  const activeUser = useRecoilValue(activeUserAtom)
  return (
    <Box
      position="absolute"
      top="0px"
      w="100%"
      h="80px"
      borderBottom="0.01px solid #737373"
      display="flex"
      alignItems={"center"}
      p="0 30px"
      gap={"10px"}
    >
      <UserIcon src={"https://bit.ly/dan-abramov"} name="Dan" size={"md"}/>
      <Text fontSize={"xl"} fontWeight="semibold">
        {activeUser}
      </Text>
    </Box>
  );
}
