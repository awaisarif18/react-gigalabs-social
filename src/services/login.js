import { ApiService } from "./index";

export const loginApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    authenticateUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const { useAuthenticateUserMutation } = loginApi;
