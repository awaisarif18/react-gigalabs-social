import styled from "styled-components";

export const StyledLogIn = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftLogIn = styled.form`
  width: 60vw;
  text-align: center;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }

  h1 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }

  input {
    padding: 1rem 8rem;
    border-radius: 15px;
    margin: 0.7rem 0;
    background-color: #eef5f3;
    border: none;
    text-align: center;
  }

  ::placeholder {
    color: #898989;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ForgotP = styled.p`
  font-size: small;
  font-weight: lighter;
`;
