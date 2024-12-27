import {
  AuthResponse,
  EditProfileData,
  SignInData,
  SignUpData,
  User,
} from "#/types/auth";
import BaseApi from "./baseApi";

class AuthApi extends BaseApi {
  private static shared: AuthApi;

  constructor() {
    if (AuthApi.shared) {
      return AuthApi.shared;
    }

    super();
    AuthApi.shared = this;
  }

  async signUp(data: SignUpData): Promise<void> {
    try {
      const res = await this._request<void>("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
    } catch (error: unknown) {
      console.error("Sign-up failed:", error);
      throw error;
    }
  }

  async signIn(data: SignInData): Promise<void> {
    try {
      const res = await this._request<AuthResponse>("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      localStorage.setItem("jwt", res.token);
    } catch (error: unknown) {
      console.error("Sign-in failed:", error);
      throw error;
    }
  }

  editProfile(data: EditProfileData): Promise<User> {
    return this._authorizedRequest<User>("/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  getMyInfo(): Promise<User> {
    return this._authorizedRequest<User>("/users/me");
  }
}

export default new AuthApi();
