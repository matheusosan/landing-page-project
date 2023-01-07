import styled from "styled-components";

export const SideBar = styled.aside`
  @media (max-width: 415px) {
    position: absolute;
    background: black;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    animation: slide-right 0.7s both;

    svg {
      float: left;
      position: absolute;
      font-size: 25px;
      color: #fff;
      top: 30px
      
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
