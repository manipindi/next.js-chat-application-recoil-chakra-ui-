import { userMsgsAtomFamily } from "@/recoil/atom-families/user-messages/user-msgs-atom-family";
import { activeUserAtom } from "@/recoil/atoms/active-user/active-user-atom";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useRecoilState } from "recoil";

const SendIcon = ({ handleOnclick }: any) => {
  return (
    <Box
      w={"40px"}
      h={"40px"}
      borderRadius="50%"
      bg={"user-hover-bg"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      _hover={{ bg: "#597df0" }}
      cursor="pointer"
      _active={{ bg: "#4063d6" }}
      onClick={handleOnclick}
    >
      <AiOutlineSend style={{ color: "#fff" }} />
    </Box>
  );
};

export default function UserChatInput() {
  const [activeUser, setActiveUser] = useRecoilState(activeUserAtom);
  const [userMessages, setUserMessages] = useRecoilState<any>(
    userMsgsAtomFamily(activeUser)
  );

  const [message, setMessage] = useState("");

  const handleOnclick = (e:any) => {
    e.preventDefault();
    if (message) {
      setUserMessages([...userMessages, { message: message }]);
      setMessage("");
    }
  };

  return (
    <Box
      position="absolute"
      bottom="0px"
      w="100%"
      h="80px"
      borderTop="0.01px solid #737373"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      p="0 30px"
    >
      <form onSubmit={handleOnclick} style={{width:"100%"}}>
        <Input
          variant="unstyled"
          placeholder="Type a message"
          h="40px"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
      </form>
      <SendIcon handleOnclick={handleOnclick} />
    </Box>
  );
}
