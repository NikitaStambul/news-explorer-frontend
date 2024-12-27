import { SignInData, SignUpData, User } from "#/types/auth";
import { createContext } from "react";

export interface UserInfo {
  user: User | null;
  userIsLoading: boolean;
}

interface UserContextValue {
  userInfo: UserInfo;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => void;
}

export const UserContext = createContext<UserContextValue>({
  userInfo: {
    user: null,
    userIsLoading: false,
  },
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
});
