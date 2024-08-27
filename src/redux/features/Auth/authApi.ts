import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});
