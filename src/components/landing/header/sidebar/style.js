import styled from "styled-components";

export const SideBar = styled.aside`
  @media (max-width: 415px) {
    position: absolute;
    background: gray;
    left: 0;
    top: 0;
    width: 80%;
    height: 80vh;
    z-index: 10;
    animation: slide-right 0.7s both;

    svg {
      position: absolute;
      font-size: 35x;
      color: #fff;
      top: 50px;
    }

    @keyframes slide-right {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 80%;
        opacity: 1;
      }
    }
  }
`;
