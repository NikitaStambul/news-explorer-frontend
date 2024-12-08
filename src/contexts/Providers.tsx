import { ReactNode } from "react";
import ModalProvider from "./ModalContext/ModalContextProvider";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default Providers;
