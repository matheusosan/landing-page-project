import styled from "styled-components";

export const HeaderBar = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 15vh;
    top: 0;
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

    button {
        width: 182px;
        height: 52px;
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
`