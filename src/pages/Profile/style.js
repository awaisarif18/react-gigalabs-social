import styled from "styled-components";

export const ProfileContainer = styled.div`
  min-height: 90vh;
  background-color: white;
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInfo = styled.div`
  min-height: 40vh;
  margin: 0 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
  }

  /* flex-direction: column; */
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
