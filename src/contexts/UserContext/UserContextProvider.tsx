import { useEffect, useState } from "react";
import { UserContext, UserInfo } from "./UserContext";
import authApi from "#/utils/authApi";
import { SignInData, SignUpData } from "#/types/auth";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    user: null,
    userIsLoading: true,
  });

  const setLoading = (value: boolean) => {
    setUserInfo((info) => ({ ...info, userIsLoading: value }));
  };

  const getCurrentUser = async () => {
    try {
      const user = await authApi.getMyInfo();
      setUserInfo((info) => ({ ...info, user }));
    } catch (error: unknown) {
      console.error("Failed to fetch user info:", error);
    }
  };

  const signIn = async (data: SignInData) => {
    await authApi.signIn(data);
    await getCurrentUser();
  };

  const signUp = async (data: SignUpData) => {
    return authApi.signUp(data);
  };

  const signOut = () => {
    setUserInfo({ user: null, userIsLoading: false });
    localStorage.removeItem("jwt");
  };

  useEffect(() => {
    setLoading(true);

    if (localStorage.getItem("jwt")) {
      getCurrentUser().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
