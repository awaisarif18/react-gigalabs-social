import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledECard = styled(motion.div)`
  height: 90vh;
  width: 30vw;
  text-align: center;
  border-radius: 15px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;
  margin-top: 30px;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.005);
  }

  img {
    object-fit: cover;
    height: 65vh;
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    font-style: bold;
    font-family: "Poppins", sans-serif;
  }
  h4 {
  }
  p {
    font-style: italic;
    font-family: "Fraunces", serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    margin: 30px auto;
  }
`;
