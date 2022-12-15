import { createContext } from "react";
import { useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const openModal = (modal) => {
    setModal(true);
  };

  const closeModal = (modal) => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
