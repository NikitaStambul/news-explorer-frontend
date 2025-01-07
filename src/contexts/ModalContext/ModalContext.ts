import { createContext } from "react";

export type ModalType = "SIGNIN" | "SIGNUP" | "REGISTERATION_SUCCESS" | null;

interface ModalContextValue {
  currentModal: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue>({
  currentModal: null,
  openModal: () => {},
  closeModal: () => {},
});
