import styled from "styled-components";

export const MainText = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  margin-left: 115px;

  span {
    margin-bottom: 22px;
    color: #fbb034;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    color: #ffff;
    line-height: 95%;
  }

  p {
    margin-top: 22px;
    color: #9a9a9a;
    font-weight: 400;
    font-size: 21px;
  }

  @media (max-width: 415px) {
    margin-left: 0;
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 15px;
    }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  margin-top: 80px;

  button {
    color: #fff;
    width: 182px;
    height: 52px;
    font-size: 15px;
    font-weight: 700;
  }

  button:first-child {
    background-color: #fbb034;
    margin-right: 40px;
  }

  button:nth-child(2) {
    border: 0.5px solid white;
    background-color: transparent;
    color: #fff;
  }

  @media (max-width: 415px) {
    justify-content: center;

    button {
      width: 120px;
    }
  }
`;
