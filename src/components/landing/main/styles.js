import styled from "styled-components";

export const MainText = styled.main `
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;;
    margin-left: 115px;

    span {
        margin-bottom: 22px;
        color: #FBB034;
    }

    h1 {
        font-weight: 700;
        font-size: 48px;
        color: #ffff;
        line-height: 95%;
    }

    p {
        margin-top: 22px;
        color: #9A9A9A;
        font-weight: 400;
        font-size: 21px;

    }

    @media (max-width: 375px) {
        margin-left: 30px;

        h1 {
            font-size: 20px;
        }

        p {
        font-size: 15px;

    }
    }
`

export const ButtonsBox = styled.div `
    display: flex;
    margin-top: 80px;
    
    button {
        width: 182px;
        height: 52px;
        font-size: 15px;
        font-weight: 700;
    }
    
    button:first-child {
        background-color: #FBB034;
        margin-right: 40px;
    }
    
    button:nth-child(2) {
        border: .5px solid white;
        background-color: transparent;
        color: #fff
    }

    @media (max-width: 375px) {
        button {
        width: 120px;
    }
    }
`