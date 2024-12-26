import { ReactNode } from "react";
import ModalProvider from "./ModalContext/ModalContextProvider";
import SearchContextProvider from "./SearchContext/SearchContextProvider";
import UserProvider from "./UserContext/UserContextProvider";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <ModalProvider>
        <SearchContextProvider>{children}</SearchContextProvider>
      </ModalProvider>
    </UserProvider>
  );
}

export default Providers;
