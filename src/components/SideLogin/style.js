import styled from "styled-components";

export const RightLogIn = styled.div`
  background-image: linear-gradient(to right, #49ba9e, #3aa7b0);
  width: 40vw;
  height: 100vh;
  text-align: center;
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
    color: white;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    color: white;
  }

  button {
    text-decoration: none;
    padding: 1rem 5rem;
    border-radius: 25px;
    border: none;
    background-color: #ffffff;
    color: black;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
  }
`;
