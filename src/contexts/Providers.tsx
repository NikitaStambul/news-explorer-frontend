import { ReactNode } from "react";
import ModalProvider from "./ModalContext/ModalContextProvider";
import SearchContextProvider from "./SearchContext/SearchContextProvider";
import UserProvider from "./UserContext/UserContextProvider";
import SavedContextProvider from "./SavedContext/SavedContextProvider";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <ModalProvider>
        <SearchContextProvider>
          <SavedContextProvider>{children}</SavedContextProvider>
        </SearchContextProvider>
      </ModalProvider>
    </UserProvider>
  );
}

export default Providers;
