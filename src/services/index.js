import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

// https://github.com/reduxjs/redux-toolkit/issues/1583
const rawBaseQuery = (baseUrl) =>
  fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers) => {
    //     const auth = safeJSONParse(localStorage.getItem("context-auth"), {});
    //     if (auth?.value) {
    //         headers.set("Authorization", Bearer ${auth.value.accessToken});
    //     }
    //     return headers;
    // },
  });

const baseQuery = async (args, api, extraOptions) => {
  const baseUrl = "https://nestjs-user-crud-awaisarif18.vercel.app/";
  if (!baseUrl) {
    return {
      error: {
        status: 400,
        statusText: "Bad Request",
        data: "No base URL found",
      },
    };
  }
  return rawBaseQuery(baseUrl)(args, api, extraOptions);
};

const ApiService = createApi({
  reducerPath: "ApiService",
  baseQuery,
  tagTypes: ["Departments", "Roles", "User", "Auth"],
  endpoints: () => ({}),
});

export { ApiService };
