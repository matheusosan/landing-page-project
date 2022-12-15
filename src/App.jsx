import React from 'react'
import { Landing } from "../src/components/landing";
import AboutUs from '../src/components/about';
import  { Book } from '../src/components/book-now';
import WorkingDays from './components/working_days';
import { ModalProvider } from './contexts/contexts';

const App = () => {
  return (
    <>
    <ModalProvider>
        <Landing />
        <AboutUs />
        <Book />
        <WorkingDays />
    </ModalProvider>
    </>
  )
}

export default App