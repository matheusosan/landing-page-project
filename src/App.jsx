import React from "react";
import MainPage from "./components/MainPage";
import { ModalProvider } from "./contexts/contexts";

const App = () => {
  return (
    <>
      <ModalProvider>
        <MainPage />
      </ModalProvider>
    </>
  );
};

export default App;
