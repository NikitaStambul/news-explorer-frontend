import { SignInData, SignUpData, User } from "#/types/auth";
import { createContext } from "react";

interface UserContextValue {
  user: User | null;
  userIsLoading: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  userIsLoading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
});
