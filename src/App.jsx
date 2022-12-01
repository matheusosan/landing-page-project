import React from 'react'
import { Landing } from "../src/components/landing";
import AboutUs from '../src/components/about';
import Book from './components/book-now';

const App = () => {
  return (
    <>
        <Landing />
        <AboutUs />
        <Book />
    </>
  )
}

export default App