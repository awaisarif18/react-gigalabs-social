import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 20px auto;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  input {
    height: 4vh;
    padding: 1rem;
    border: none;
    width: 20vw;
    margin-bottom: 10px;
  }

  .message {
    height: 15vh;
  }

  @media screen and (max-width: 768px) {
    input {
      height: 2vh;
      width: 80vw;
    }

    .message {
      height: 10vh;
      width: 80vw;
    }
  }
`;
