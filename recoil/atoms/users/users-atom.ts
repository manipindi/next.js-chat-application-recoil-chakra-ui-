import { atom } from "recoil";

export const localStorageEffect = (key:any) => ({setSelf, onSet}:any) => {
    let storage = typeof window !== "undefined" ? window.localStorage : null;
    const savedValue = storage?.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newList:any)=>{
        if(newList.length){
            localStorage.setItem(key, JSON.stringify(newList))
        }
    })
  };

export const usersAtom = atom<any>({
    key : "userList",
    default : [],
    effects_UNSTABLE: [
        localStorageEffect('userList')
    ]
})