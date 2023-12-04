import styled from "styled-components";

export const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const RightSignUp = styled.form`
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
    padding: 1rem 4rem;
    border-radius: 15px;
    margin: 0.7rem 0;
    background-color: #eef5f3;
    border: none;
    text-align: center;
    width: 8vw;
    height: 5vh;
  }

  ::placeholder {
    color: #898989;
    text-align: center;
  }

  #dropdown {
    text-decoration: none;
    padding: 1rem 4rem;

    border: none;
    outline: none;
    background-color: #eef5f3;
    border-radius: 15px;
    width: 42%;
    height: 27%;

    margin-top: 0.5rem;
  }
  button {
    text-decoration: none;
  }

  .upbutton {
    text-decoration: none;
    background-color: #3cc6a5;
    padding: 1rem 5rem;
    border-radius: 25px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const InputContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
