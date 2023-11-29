import styled from "styled-components";

export const StyledCopyrights = styled.div`
  a {
    text-decoration: none;
  }

  h1 {
    color: #43b2a5;
  }

  h3 {
    color: #43b2a5;
  }

  .icons {
    font-size: 0.7rem;
    color: #707070;

    @media screen and (max-width: 768px) {
      width: 10%;
    }
  }

  p {
    color: #707070;
    font-weight: lighter;
    font-style: italic;
  }
`;

export const StyledTable = styled.div`
  a {
    margin: "1rem";
    text-decoration: none;
  }

  p {
    color: #707070;
    &:hover {
      color: black;
    }
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
