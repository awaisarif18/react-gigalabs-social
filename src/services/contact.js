import { ApiService } from "./index";

export const messageApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    contactForm: builder.mutation({
      query: (formObj) => ({
        url: "/contact",
        method: "POST",
        body: formObj,
      }),
      providesTags: ["Message"],
    }),
  }),
  overrideExisting: false,
});

export const { useContactFormMutation } = messageApi;
