import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
  background: #000000;

  .first-line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    height: 10rem;
    width: 50%;
    border-bottom: 0.3px solid white;

    svg {
      color: white;
    }

    p {
      font-weight: 400;
      font-size: 22px;
      color: #fff;
    }

    button {
      height: 50px;
      width: 175px;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
      font-size: 17px;
      background: #fbb034;
    }
  }
  .mid-line {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    gap: 6rem;
    margin: 3rem 0px 6rem 0px;

    h2 {
      color: #fbb034;
    }

    .news,
    .services,
    .about,
    .help {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      font-weight: 400;
      font-size: 15px;

      h2 {
        font-weight: 400;
        font-size: 17px;
      }

      a {
        opacity: 0.8;
      }
      a:hover {
        opacity: 1;
      }
    }

    .news {
      h2 {
        color: #fff;
        font-size: 22px;
      }

      input {
        height: 50px;
        background: transparent;
        border: none;
        font-size: 15px;
        border-bottom: 0.3px solid #fff;
        padding: 15px 0px 15px 5px;
        color: #fff;
      }

      button {
        height: 50px;
        width: 50px;
        border-radius: 8px 8px 0px 0px;
        background: #fbb034;
        color: #fff;
        font-size: 1rem;
      }
    }
  }

  .bottom-line {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    width: 70%;

    span {
      display: flex;
      gap: 2rem;
    }

    svg {
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;
