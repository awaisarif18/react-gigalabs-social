import styled from "styled-components";

export const StyledIcons = styled.div`
  text-decoration: none;
  color: gray;

  width: 10vw;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;
