import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 90vw;
  overflow-x: hidden;
  margin: 0 auto;

  p {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  color: black;
  h2 {
    font-weight: lighter;
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
  }

  span {
    color: white;
    background-color: #43b2a5;
    font-weight: bold;
    padding: 2px;
    border-radius: 15px;
  }
`;

export const WebAnimation = styled(motion.div)`
  height: 100vh;
  width: 45vw;

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: auto;
  }
`;
