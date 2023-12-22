import { ApiService } from "./index";

export const deleteUserApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `user/${userId}`,
        method: "DELETE",
        args: { userId },
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useDeleteUserMutation } = deleteUserApi;
