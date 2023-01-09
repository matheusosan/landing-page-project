import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000e0;
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  z-index: 1;

  div {
    margin-left: 40px;
    cursor: pointer;

    > a {
      color: #fbb034;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  svg {
    color: #fff;
    font-size: 40px;
    display: none;
  }

  a:hover {
    transition: 0.2s ease;
    color: #fbb034;
  }

  button {
    width: 180px;
    height: 40px;
    margin-right: 40px;
    background-color: #fbb034;
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

  @media (max-width: 420px) {
    svg {
      display: flex;
      margin-left: 20px;
    }

    button {
      margin-right: 20px;
      height: 40px;
      width: 150px;
      font-size: 12px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a,
  button {
    margin-left: 50px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffff;
    font-size: 18px;
  }

  a:focus {
    color: #fbb034;
  }

  @media (max-width: 415px) {
    a {
      display: none;
    }
  }
`;
