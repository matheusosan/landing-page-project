import styled from "styled-components";
import Bg from "./affiliate_bg.jpg";

export const AffiliateSection = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;

  h2 {
    font-weight: 400;
    font-size: 18px;
    color: #fbb034;
  }

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 94%;
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 3.12rem;
  }

  button {
    background-color: transparent;
    width: 208px;
    height: 51px;
    font-weight: 700;
    font-size: 15px;
    border: 1px solid #fbb034;
    color: #fbb034;
  }
`;