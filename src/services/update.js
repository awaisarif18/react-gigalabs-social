import { ApiService } from "./index";

export const updateApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, updateObj }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: updateObj,
        args: { id },
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateUserMutation } = updateApi;
