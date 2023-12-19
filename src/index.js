import React from "react";
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
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import { store } from "./state/store";
import UpdateUser from "./pages/Update";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

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
      {
        path: paths.profile,
        element: <Profile />,
      },
      {
        path: paths.update,
        element: <UpdateUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Root>
        <RouterProvider router={router} />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </Root>
    </Provider>
  </QueryClientProvider>
);
