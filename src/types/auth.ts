export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface SignUpData {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface EditProfileData {
  name: string;
  avatar: string;
}

export interface AuthResponse {
  token: string;
}
