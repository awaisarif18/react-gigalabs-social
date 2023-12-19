import axios from "axios";
import { toast } from "react-toastify";

export const getRoles = () => {
  return axios
    .get("https://nestjs-user-crud-awaisarif18.vercel.app/role")
    .then((response) => response.data)
    .catch((error) => {
      toast.error("Failed to fetch Roles", error);
      console.log(error);
    });
};
export const getDepartments = () => {
  return axios
    .get("https://nestjs-user-crud-awaisarif18.vercel.app/department")
    .then((response) => response.data)
    .catch((error) => {
      toast.error("Failed to fetch Departments", error);
      console.log(error);
    });
};
