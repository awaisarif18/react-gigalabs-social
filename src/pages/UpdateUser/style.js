import styled from "styled-components";

export const UpdatePage = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledInput = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const UpdateHeader = styled.div`
  width: 40%;

  min-height: 25vh;
  margin: 0 auto;
`;

export const UpdateForm = styled.form`
  width: 50%;
  text-align: center;
  background-color: #ffffff;
  min-height: 70vh;
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
    width: 17vw;
    height: 9vh;
    margin: 0.5rem auto;
    /* margin-top: 0.5rem; */
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 4.5rem;
`;
