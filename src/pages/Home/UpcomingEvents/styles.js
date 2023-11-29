import styled from "styled-components";

export const StyledEventContainer = styled.div`
  min-height: 90vh;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledEvents = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr;
`;
