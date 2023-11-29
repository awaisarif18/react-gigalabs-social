import styled from "styled-components";

export const ForgotContainer = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  h1 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  button {
    text-decoration: none;
    background-color: #3cc6a5;
    padding: 1rem 3rem;
    border-radius: 25px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
  }
`;
