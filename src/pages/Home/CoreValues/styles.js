import styled from "styled-components";

export const StyledValues = styled.div`
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
