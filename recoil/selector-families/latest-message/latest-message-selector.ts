import { userMsgsAtomFamily } from "@/recoil/atom-families/user-messages/user-msgs-atom-family";
import { selectorFamily } from "recoil";

export const latestMessageSelectorFam = selectorFamily({
    key : "latmessage",
    get : (username)=> ({get})=> {
        const userMessages = get(userMsgsAtomFamily(username))
        let lastMessage:any = userMessages?.[userMessages.length - 1];
        return lastMessage?.message
    },
})