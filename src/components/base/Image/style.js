import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledGImage = styled(motion.div)`
  z-index: 3;
  img {
    width: 40vw;
    height: 85vh;
    object-fit: cover;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 90vw;
    }
  }
`;
