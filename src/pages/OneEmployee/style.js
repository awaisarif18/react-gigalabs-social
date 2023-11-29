import { motion } from "framer-motion";
import styled from "styled-components";

export const CoverImage = styled.div`
  height: 100vh;
  /* width: 100%; */

  background-image: url(${(props) => props.myimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 35%;
  font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 300px;
    color: aliceblue;
    text-shadow: 2px 0px 5px;
    font-size: 3.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    font-size: 2rem;
    font-style: italic;
    text-shadow: 2px 0px 5px;
    color: cyan;
  }

  .description {
    width: 45vw;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .description {
      width: 90vw;
    }
  }
`;

export const ProfileImages = styled(motion.div)`
  width: 100%;
  height: auto;

  margin: 30px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .image {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  img {
    width: 30vw;
    height: 82vh;

    object-fit: cover;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .image {
    width: 90%;
    height: 70vh;
    margin: 30px auto;
  }
`;

export const ContentContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    ${(props) => props.color}
  );
`;

export const EmployeeRole = styled.div`
  text-align: center;
  font-size: 2.5rem;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #0b4e88;
`;

export const Technologies = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.7rem;
  text-shadow: 2px 0px 5px;
  color: cyan;
`;
