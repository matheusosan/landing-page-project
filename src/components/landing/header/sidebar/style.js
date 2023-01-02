import styled from "styled-components";

export const SideBar = styled.aside`
  @media (max-width: 415px) {
    position: absolute;
    background: #000000e6;
    left: 0;
    top: 0;
    height: 80vh;
    width: 100%;
    animation: slide-right 0.7s both;

    svg {
      position: absolute;
      font-size: 35px;
      color: #fff;
      top: 30px
      
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
