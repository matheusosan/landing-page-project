import styled from "styled-components";

export const AboutMain = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffff;
    height: 80vh;
    width: 100%;

    span {
        font-weight: 400;
        font-size: 18px;
        color: #FBB034;
    }

    h2 {
        font-weight: 700;
        font-size: 48px;
        color: black;
        line-height: 95%;
        margin: 24px 0px;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        color: #565656;
        line-height: 106%;
    }

    button {
        margin-top: 43px;
        width: 188px;
        height: 52px;
        font-size: 15px;
        font-weight: 700;
        background-color: #FBB034;
        border: none;
    }
    
    @media (max-width: 415px) {
        align-items: center;

        h2 {
            font-size: 30px;

        }

        p {
            font-size: 15px;
            padding: 0px 20px;
        }
    }

`
