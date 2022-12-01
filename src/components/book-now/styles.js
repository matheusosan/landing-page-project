import styled from "styled-components";

export const BookMain = styled.main `
    display: flex;
    height: 80vh;
    width: 100%;
    background-color: black;
`

export const Background = styled.img `
    width: 100%;
    height: 80vh;
    filter: blur(3px);
    background-position: 10px 0px;
    background-attachment: fixed;
    background-clip: border-box;
    background-size: contain;
`

export const Blur = styled.div `
    height: inherit;
    width: inherit;
    position: absolute; 
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)), url(.jpg);
    filter: blur(3px);
`