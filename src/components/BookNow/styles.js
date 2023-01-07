import styled from "styled-components";
import bg from '../../assets/images/book/book3.jpg'

export const BookContainer = styled.main `
    display: flex;
    height: 80vh;
    width: 100%;
    background-color: black;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    

`

export const DescriptionContainer = styled.main `
    display: flex;
    width: 100%;
    height: inherit;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 20em;
`

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        top: 50%;
        font-weight: 400;
        font-size: 18px;
        color: #FBB034;
    }

    h2 {
        font-weight: 700;
        font-size: 48px;
        color: #fff;
        line-height: 95%;
        margin: 24px 0px;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        color: #B8B8B8;
        line-height: 105%;
    }

    button {
        margin-top: 43px;
        width: 251px;
        color: #fff;
        height: 52px;
        font-size: 15px;
        font-weight: 700;
        background-color: #FBB034;
        border: none;
    }

    @media (max-width: 420px) {
        align-items: center;

        h2 {
            font-size: 1.8rem;
            padding: 0px 50px;
            text-align: center;
        }

        p {
            padding: 0px 50px;
        }

    }
`

export const CallNow = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 280px;
    width: 320px;

    div {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #E8E8E8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    svg {
        color: #FBB034;
        font-size: 40px;
        transform: rotate(90deg)
    }

    h2 {
        margin-top: 12px;
        font-weight: 700;
        font-size: 20px;
        color: #B8B8B8;
    }
    p {
        font-weight: 700;
        font-size: 24px;
        color: black;
    }

    @media (max-width: 415px) {
        display: none;
    }
` 