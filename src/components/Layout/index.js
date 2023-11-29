import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Nav";
import Footer from "../Footer/index";
import { StyledLayout } from "./style";

const Layout = () => {
  return (
    <StyledLayout>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
