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

  const [sidebar, setSidebar] = useState(false)

  const openSideBar = (sidebar) => {
    setSidebar(true)
  }

  const closeSideBar = (sidebar) => {
    setSidebar(false)
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal, sidebar, closeSideBar, openSideBar }}>
      {children}
    </ModalContext.Provider>
  );
};
