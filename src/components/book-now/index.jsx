import React from 'react'
import { BookMain, Background, Blur } from './styles'
import BookImage from './book.jpg'
import BookDescription from './description'

export const Book = () => {
  return (
    <BookMain>
        <Background src={BookImage} alt="" />
        <Blur />
        <BookDescription />
    </BookMain>
  )
}

