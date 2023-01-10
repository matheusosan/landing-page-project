import styled from "styled-components";

export const Testimonials = styled.section`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  gap: 6rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div h2 {
    color: #fbb034;
    font-weight: 400;
    font-size: 18px;
  }
  > div h3 {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 48px;
    color: #000000;
    line-height: 94%;
  }
  > div p {
    font-weight: 400;
    font-size: 18px;
    color: #ababab;
    margin-top: 1.2rem;
  }
  > div button {
    width: 208px;
    height: 52px;
    margin-top: 2rem;
    background: #fbb034;
    border: none;
    font-weight: 700;
    font-size: 15px;
    color: #000000;
  }
  > :nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    background-color: inherit;

    .user-reviews {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 340px;
      height: auto;
      padding: 20px;
      -webkit-box-shadow: 10px 10px 17px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 17px -3px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 17px -3px rgba(0, 0, 0, 0.75);

      p {
        margin-top: 0;
        font-weight: 700;
        font-size: 13px;
        color: #c2c2c2;
      }

      h2 {
        font-weight: 700;
        font-size: 15px;
        color: #000000;
      }
    }
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }

    svg {
      color: #fbb034;
      font-size: 30px;
    }
  }

  @media (max-width: 420px) {
    height: auto;
    flex-direction: column;
    align-items: center;

    >div {
      align-items: center;
      text-align: center;
      
      >p {
        font-size: 1rem;
        padding: 0px 4rem;
      }
    }

    > :nth-child(2) {
      flex-direction: column;
      margin-bottom: 5rem;
    }

  }
`;
