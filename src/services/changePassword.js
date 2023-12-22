import { ApiService } from "./index";

export const changePasswordApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: ({ username, updateObj }) => ({
        url: `user/change-password/${username}`,
        method: "PATCH",
        body: updateObj,
        args: { username },
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useChangePasswordMutation } = changePasswordApi;
