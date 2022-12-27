import styled from "styled-components";
import Img from '../../assets/images/landing/bg3.jpg'

export const LandingContainer = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    background-image: url(${Img});
    background-position: center;
    background-size: cover;
    height: 90vh;
    
`

export const Image = styled.img `
    position: absolute;
    right: 0;
    bottom: 0;
    width: 819px;
    height: 700px;

    @media (max-width: 415px) {
            display: none;
    }    
    
`