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
  width: 1135px;

  img {
    width: 50%;
    height: 393px;
  }

  div {
    width: 100%;
    height: inherit 
  }
`;

export const WorkingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fbb034;

  h2 {
    font-size: 32px;
    color: white;
    font-weight: 700
  }

  p {
    font-size: 18px;
  }

  div {
    display: flex;
    width: 50%;
    border-bottom: 2px dotted black;
  }

  div>h2 {
    font-size: 18px
  }

`;
