import styled from "styled-components";

export const WorkingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: #fff;
`;

export const WorkingContent = styled.div`
  display: flex;
  height: 393px;
  width: 100%;
  background: #fbb034;
  justify-content: center;

  img {
    width: 50%;
    height: 100%;
  }

  > div {
    width: 30%;
    height: inherit;
  }

  @media (max-width: 420px) {
    height: auto;

    img {
      display: none;
    }
  }
`;

export const WorkingText = styled.div`
  display: flex;
  background: inherit;
  justify-content: center;
  flex-direction: column;
  margin-left: 4rem;
  margin-right: 10rem;
  width: 100%;

  > h2 {
    color: #fff;
    font-size: 32px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dotted black;
    margin-top: 1rem;
  }
  > div > h2 {
    color: #fff;
    font-size: 16px;
  }
  > div > p {
    font-size: 13px;
  }

  > button {
    margin-top: 2rem;
    width: 166px;
    height: 39px;
    background: inherit;
    color: #fff;
    border: 1px solid black;
    font-weight: 700;
    font-size: 16px;
  }

  @media (max-width: 420px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;

    button {
      margin-bottom: 2rem;
    }

    > div {
      width: 100%;
    }

    > div > p {
      width: 100%;
    }
  }
`;
