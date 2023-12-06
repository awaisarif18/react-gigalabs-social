import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Nav";
import Footer from "../Footer/index";
import { StyledLayout } from "./style";
// import { createContext } from "react";

// const AuthContext = React.createContext();

const Layout = () => {
  // const [isLogged, setIsLogged] = useState(false);

  return (
    <StyledLayout>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
