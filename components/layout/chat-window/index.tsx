import UserChatHeader from "@/components/molecules/user-chat-header";
import UserChatInput from "@/components/molecules/user-chat-input";
import UserChatListContainer from "@/components/organisms/user-messages-box";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function ChatWindow() {
  return (
    <Box
      w={`calc(100vw - 400px)`}
      position="absolute"
      left="400px"
      minHeight={"100vh"}
      bg="app-bg"
    >
        <UserChatHeader/>
        <UserChatListContainer/>
        <UserChatInput/>
    </Box>
  );
}
