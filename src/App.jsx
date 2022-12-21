import React from 'react'
import { Landing } from "../src/components/landing";
import AboutUs from '../src/components/about';
import  { Book } from '../src/components/book-now';
import WorkingDays from './components/working_days';
import { ModalProvider } from './contexts/contexts';
import Testimonials from './components/testimonials';

const App = () => {
  return (
    <>
    <ModalProvider>
        <Landing />
        <AboutUs />
        <Book />
        <WorkingDays />
        <Testimonials />
    </ModalProvider>
    </>
  )
}

export default App