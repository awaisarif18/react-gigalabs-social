import { ApiService } from "./index";

export const departmentApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      providesTags: ["Departments"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetDepartmentsQuery } = departmentApi;
