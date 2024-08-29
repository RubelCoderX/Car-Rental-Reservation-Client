import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: loginInfo,
      }),
      invalidatesTags: ["user"],
    }),

    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});
