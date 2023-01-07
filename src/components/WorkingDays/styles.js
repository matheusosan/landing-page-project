import styled from "styled-components";

export const WorkingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: #fff;

  @media (max-width: 420px) {
    height: 40vh;
  }
`;

export const WorkingContent = styled.div`
  display: flex;
  width: 70%;
  height: 393px;
  background: #fbb034;
  justify-content: center;

  img {
    width: 50%;
    height: 100%;
  }

  @media (max-width: 420px) {
    height: auto;
    box-shadow: 10px 10px 24px -4px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 24px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 24px -4px rgba(0, 0, 0, 0.75);
    border-radius: 10px;  
    
    img {
      display: none;
    }
  }
`;

export const WorkingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;

  > h2 {
    color: #fff;
    font-size: 32px;
  }

  > p {
    color: #fff;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
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
    height: 39px;
    width: 200px;
    background: inherit;
    color: #fff;
    border: 2px solid white;
    font-weight: 700;
    font-size: 16px;
  }

  @media (max-width: 420px) {
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 1rem;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }

    button {
      margin-bottom: 2rem;
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }

    > div > h2 {
      font-size: 10px;
    }

    > div > p {
      font-size: 10px;
    }
  }
`;
