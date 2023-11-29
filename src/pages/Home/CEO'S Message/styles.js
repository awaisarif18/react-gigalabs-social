import { motion } from "framer-motion";
import styled from "styled-components";

export const CeoMessageContainer = styled.div`
  height: 90vh;
  width: 90vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Message = styled(motion.div)`
  width: 35vw;

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 auto;
  }
`;
