import { SignInData, SignUpData, User } from "types/auth";
import { createContext } from "react";
import { Article } from "types/newsapi";

export interface UserInfo {
  user: User | null;
  userIsLoading: boolean;
}

interface UserContextValue {
  userInfo: UserInfo;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => void;
  saveArticle: (article: Article, keyword: string) => Promise<void>;
  removeArticle: (url: string) => void;
}

export const UserContext = createContext<UserContextValue>({
  userInfo: {
    user: null,
    userIsLoading: false,
  },
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
  saveArticle: async () => {},
  removeArticle: () => {},
});
