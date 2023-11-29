import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledEvent = styled(motion.div)`
  height: 25vh;
  width: 25vw;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 2px 2px 2px black;
  background-image: url(${(props) => props.myimage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 15px;

  .description {
    font-family: "Fraunces", serif;
    font-weight: lighter;
  }

  .location {
    font-family: "Sometype Mono", monospace;
  }

  h3 {
    font-weight: bold;
    /* font-family: "Roboto", sans-serif; */
  }

  span {
    font-weight: lighter;
    font-style: italic;
    font-size: 0.8rem;
  }

  .dates {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    height: 35vh;
    width: 90vw;
    margin: 15px auto;
  }
`;

export const StyledData = styled.div`
  width: 22vw;
  margin: 0 auto;
  overflow: hidden;
`;

export const EventOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 15px;
`;
