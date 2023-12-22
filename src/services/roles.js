import { ApiService } from "./index";

export const roleApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => ({
        url: "/role",
        method: "GET",
      }),
      providesTags: ["Roles"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRolesQuery } = roleApi;
