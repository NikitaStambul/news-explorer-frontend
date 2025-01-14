import { SavedArticle } from "./savedArticle";

export interface User {
  _id: string;
  email: string;
  username: string;
  bookmarked: SavedArticle[];
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface EditProfileData {
  username: string;
  avatar: string;
}

export interface AuthResponse {
  token: string;
}
