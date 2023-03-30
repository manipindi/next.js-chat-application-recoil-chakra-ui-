import UserIcon from "@/components/atoms/user-icon";
import { activeUserAtom } from "@/recoil/atoms/active-user/active-user-atom";
import { latestMessageSelectorFam } from "@/recoil/selector-families/latest-message/latest-message-selector";
import {  Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function UserBox(props: any) {
  const { user } = props;
  const [activeUser, setActiveUser] = useRecoilState(activeUserAtom);
  
  const lastMessage = useRecoilValue(latestMessageSelectorFam(user.username))

  const handlerUser = () => {
    setActiveUser(user?.username);
  };

  return (
    <Flex
      bg={user.username === activeUser ? "user-hover-bg" : "user-bg"}
      h="80px"
      color="white"
      borderRadius={"md"}
      alignItems="center"
      p="10px 18px"
      gap="10px"
      flexShrink={0}
      role="group"
      _hover={{ bg: "user-hover-bg" }}
      cursor="pointer"
      onClick={handlerUser}
    >
      <UserIcon src="https://bit.ly/dan-abramov" name="Dan abs" />
      <Flex flexDirection={"column"}>
        <Text
          fontSize={"lg"}
          fontWeight="semibold"
          color={
            user.username === activeUser
              ? "active-user-text-color"
              : "text-color"
          }
          _groupHover={{ color: "white" }}
        >
          {user?.username}
        </Text>
        <Text
          fontSize={"sm"}
          color={
            user.username === activeUser
              ? "active-user-text-color"
              : "subtext-color"
          }
          _groupHover={{ color: "white" }}
        >
          {lastMessage}
        </Text>
      </Flex>
    </Flex>
  );
}
