import { usersAtom } from "@/recoil/atoms/users/users-atom";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export default function AddUserModal({ isOpen, onClose }: any) {
  const [users, setUsers] = useRecoilState(usersAtom);

  const [userInfo, setUserInfo] = useState("");

  const userAdditionHandler = () => {
    if (userInfo) {
      onClose();
      setUsers([...users, { username: userInfo }]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <Input
            variant="outline"
            placeholder="Enter Username"
            onChange={(e: any) => setUserInfo(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={userAdditionHandler}>
            Add User
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
