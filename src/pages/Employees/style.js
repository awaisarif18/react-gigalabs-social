import { motion } from "framer-motion";
import styled from "styled-components";

export const EmployeeContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
