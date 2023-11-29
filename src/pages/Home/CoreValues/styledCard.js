import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCard = styled(motion.div)`
  height: 60vh;
  width: 30vw;
  background-image: url(${(props) => props.myimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 70%;
  position: relative;
  border-radius: 15px;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 15px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  p {
    font-family: "Fraunces", serif;
    text-align: center;
    font-size: 1.2rem;
  }

  .description {
    width: 60%;
    height: 50%;
  }
`;
