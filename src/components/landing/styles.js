import styled from "styled-components";

export const Main = styled.main `
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    
    
`

export const Background = styled.img `
    width: 100%;
    height: 90vh;
    display: flex;
    
`

export const BlackFilter = styled.div `
    height: 90vh;
    width: 100%;
    background-color: #000000c7;
    position: absolute;
`

export const Image = styled.img `
    position: absolute;
    right: 0;
    bottom: 0;
    width: 820px;
    height: 700px;

    

    @media (max-width: 415px) {
            display: none;
    }    
    
`