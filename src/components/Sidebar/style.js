import styled from "styled-components";

export const SideBar = styled.aside`
  @media (max-width: 420px) {
    position: absolute;
    background: black;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    animation: slide-right .8s;

    svg {
      float: left;
      position: absolute;
      font-size: 25px;
      color: #fff;
      top: 30px;
      animation: show-close 2.3s;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 50%;
      align-items: center;
      gap: 1.5rem;
      justify-content: center;

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
