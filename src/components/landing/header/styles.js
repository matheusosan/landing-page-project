import styled from "styled-components";

export const HeaderBar = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #000000e0;
    width: 100%;
    height: 10vh;
    top: 0;
    z-index: 1;

    svg {
        color: #fff;
        font-size: 40px;
        display: none;
    }
    button {
        width: 182px;
        height: 52px;
        margin-right: 40px;
        background-color: #FBB034;
        font-weight: 700;
        text-align: center;
        color: black;
        font-size: 18px;
        cursor: pointer;
        transition: 1s ease;
        border: none;
    }

    button:hover {
        scale: 105%;
    }

    @media (max-width: 415px) {
        svg {
            display: flex;
            margin-left: 20px;
        }

        button {
            margin-right: 20px;
            height: 40px;
            width: 120px;
            font-size: 12px;
        }
    }
`

export const Nav = styled.nav `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;


    a, button {
        margin-left: 50px;
    }

    a {
        text-decoration: none;
        font-weight: 700;
        color: #ffff;
        font-size: 18px;
        
    }

    a:focus {
        color: #FBB034;

    }

    @media (max-width: 415px) {
        a {
            display: none;
        }
    }
`