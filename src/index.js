import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import ForgotPassword from "./pages/ForgotPassword/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import { ToastContainer } from "react-toastify";
import OneEmployee from "./pages/OneEmployee";
import { paths } from "./constants/paths";
import { Root } from "./styles/style";

const router = createBrowserRouter([
  {
    path: paths.root,
    element: <Layout />,
    children: [
      {
        path: paths.home,
        element: <Home />,
      },

      {
        path: paths.SignUp,
        element: <SignUp />,
      },

      {
        path: paths.ChangePassword,
        element: <ForgotPassword />,
      },
      {
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.Employees,
        element: <Employees />,
      },
      {
        path: paths.OneEmployee,
        element: <OneEmployee />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Root>
      <RouterProvider router={router} />
      <ToastContainer />
    </Root>
  </StrictMode>
);
