import React from 'react'
import { Landing } from "../components/landing";
import AboutUs from '../components/about';
import Book from '../components/book';

const Home = () => {
  return (
    <>
        <Landing />
        <AboutUs />
        <Book />
    </>
  )
}

export default Home