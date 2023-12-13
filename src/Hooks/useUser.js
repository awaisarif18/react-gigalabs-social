import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../state/loggedStatus/statusSlice";
const useUser = () => {
  const token = localStorage.getItem("access_token");

  const logoutHandler = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      // console.log(token);
      console.log("logged in");
      dispatch(login());
    } else {
      dispatch(logout());
      console.log("logged out");
    }
  }, [token, dispatch]);

  return logoutHandler;
};

export default useUser;
