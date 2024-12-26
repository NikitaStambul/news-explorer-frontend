import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import authApi from "#/utils/authApi";
import { SignInData, SignUpData, User } from "#/types/auth";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userIsLoading, setUserIsLoading] = useState(true);

  const getCurrentUser = async () => {
    setUserIsLoading(true);

    return authApi
      .getMyInfo()
      .then(setUser)
      .catch(console.error)
      .finally(() => {
        setUserIsLoading(false);
      });
  };

  const signIn = async (data: SignInData) => {
    return authApi.signIn(data).then(getCurrentUser).catch(console.error);
  };

  const signUp = async (data: SignUpData) => {
    return authApi.signUp(data);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("jwt");
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userIsLoading,
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
