import { ApiService } from "./index";

export const registerApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (signUpObj) => ({
        url: "/user",
        method: "POST",
        body: signUpObj,
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation } = registerApi;
