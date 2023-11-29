import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMission = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const StyledText = styled(motion.div)`
  text-align: left;
  font-size: 1.3rem;
  text-align: left;

  width: 45vw;
  z-index: 3;

  h3 {
    font-weight: lighter;
  }

  span {
    background-color: #3cc6a5;
    color: white;
    font-weight: bold;
    padding: 3px;
    border-radius: 5px;
  }

  .lastLine {
    font-size: 1.7rem;
    font-family: "Sriracha", cursive;
    font-weight: bold;
    word-spacing: 5px;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-bottom: 20px;
  }
`;

export const LineAnimation = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
`;
