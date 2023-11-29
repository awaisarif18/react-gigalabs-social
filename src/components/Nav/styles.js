import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  color: black;
  height: 100px;

  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0px 10px;
  z-index: 5;
  transform: translateZ(0);
  a {
    text-decoration: none;
    font-weight: bold;
    padding: 1rem;
    color: #767272;
  }

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  a:hover {
    color: black;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
