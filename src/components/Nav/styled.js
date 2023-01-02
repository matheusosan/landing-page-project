import styled from "styled-components";

export const NavBox = styled.div`
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 10rem;

    a {
      font-size: 1.5rem;
    }
  }
`;
