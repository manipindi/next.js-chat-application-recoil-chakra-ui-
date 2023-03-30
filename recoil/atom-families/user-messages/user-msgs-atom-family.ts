import { localStorageEffect } from "@/recoil/atoms/users/users-atom";
import { atomFamily } from "recoil";

export const userMsgsAtomFamily = atomFamily({
  key: "userMessagesFamily",
  default: [],
  effects: (username) => [localStorageEffect(username)],
});
