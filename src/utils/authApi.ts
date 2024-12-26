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

  signUp(data: SignUpData): Promise<void> {
    return this._request<void>("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  }

  signIn(data: SignInData): Promise<void> {
    return this._request<AuthResponse>("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      localStorage.setItem("jwt", res.token);
    });
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
