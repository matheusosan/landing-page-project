import React from 'react'
import { Landing } from "../src/components/landing";
import AboutUs from '../src/components/about';
import  { Book } from '../src/components/book-now';
import WorkingDays from './components/working_days';


const App = () => {
  return (
    <>
        <Landing />
        <AboutUs />
        <Book />
        <WorkingDays />
    </>
  )
}

export default App