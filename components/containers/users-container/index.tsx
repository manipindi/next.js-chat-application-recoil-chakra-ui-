import UserBox from "@/components/molecules/user";
import { usersAtom } from "@/recoil/atoms/users/users-atom";
import { Tokens } from "@/theme/tokens";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "./user-container.module.css";

export default function UsersContainer() {
  const users = useRecoilValue(usersAtom);
  return (
    <Flex
      flexDirection="column"
      gap="10px"
      overflowY="auto"
      style={{ height: `calc(100vh - 100px)` }}
      className={styles["user-container"]}
    >
      {!!users && !!users.length ? (
        users.map((user: any, idx: any) => <UserBox key={idx} user={user}/>)
      ) : (
        <Box
          h={"100%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"2xl"}>Add Users</Text>
        </Box>
      )}
    </Flex>
  );
}
