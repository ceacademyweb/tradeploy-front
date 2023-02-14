import {create} from "zustand";

interface UserState {
  user: {
    name: string;
    id: string,
    email: string;
    subscriptionActive: boolean;
    isLogged: boolean;
  },
  setUser: (userObj: {
    name: string;
    id: string,
    email: string;
    subscriptionActive: boolean;
    isLogged: boolean;
  }) => void;
}

export const useUserStore =
  create<UserState>((set,get) => ({
    user:{
      id: "",
      name: "",
      email: "",
      subscriptionActive: false,
      isLogged: false,
    },
    setUser: (userObj)=>{
      set({user: userObj})
    }
  }));
