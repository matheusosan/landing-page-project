import React from 'react'
import Bg from './bg.jpeg'
import image from './image.png'
import { Background, Main, Image, BlackFilter } from './styles'
import Header from './header'
import MainDescription from './main'

export const Landing = () => {
  return (
    <Main>
        <Background src={Bg} alt="Background" />
        <BlackFilter />
            <Header />
        <MainDescription />
        <Image src={image} alt="" />
    </Main> 
  )
}
