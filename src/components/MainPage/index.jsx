import React from 'react'
import Header from '../Header'
import { Landing } from "../Landing";
import AboutUs from '../About';
import  { Book } from '../BookNow';
import WorkingDays from '../WorkingDays';
import Testimonials from '../Testimonials';
import Affiliate from '../Affiliate';
import Footer from '../Footer/';

const MainPage = () => {
  return (
    <>
        <Header />
        <Landing id="home"/>
        <AboutUs id="About"/>
        <Book id="book"/>
        <WorkingDays id="working"/>
        <Testimonials id="testimonials"/>
        <Affiliate id="affiliate"/>
        <Footer id="Footer"/>
    </>
  )
}

export default MainPage
