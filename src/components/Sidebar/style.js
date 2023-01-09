import styled from "styled-components";

export const SideBar = styled.aside`
  @media (max-width: 420px) {
    position: absolute;
    background: black;
    left: 0;
    top: 0;
    width: 80%;
    height: 100vh;
    animation: slide-right .8s;

    svg {
      float: left;
      position: relative;
      font-size: 25px;
      color: #fff;
      top: 30px;
      animation: show-close 2.3s;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      margin: 50% 0 0 0;
      justify-content: center;
      width: 100%;

      >a {
        font-size: 1.3rem;
        color: #fff;
        
      }
    }

    @keyframes slide-right {
      0% {
        left: -100%;
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes show-close {
      0% {
        left: -100%;
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
