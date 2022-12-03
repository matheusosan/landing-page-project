import React from 'react'
import { BookContainer, BackgroundImage, ImageBlur } from './styles'
import BookImage from './book.jpg'
import BookDescription from './description'

export const Book = () => {
  return (
    <BookContainer>
        <BackgroundImage src={BookImage} alt="" />
        <ImageBlur />
        <BookDescription />
    </BookContainer>
  )
}

