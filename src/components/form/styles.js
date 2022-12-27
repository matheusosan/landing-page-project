import styled from "styled-components";

export const FormContainer = styled.form `
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    width: 60%;
    height: 70%;


    
    label {
        display: flex;
        flex-direction: column;
        font-weight: 600;
    }

    label>span {
        position: absolute;
        margin-top: 50px;
        color: red;
        font-size: .7rem;
    }
    
    label>input {
        width: 100%;
        padding: 2px;
        border: none;
        border-bottom: 1px solid black;
    }

    label>input:focus {
        outline: none;

    }

    >button {
        background: #fbb034;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;

    }
`