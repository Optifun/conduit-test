import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiURL } from "../constants";


export const userService = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: build => ({
    currentUser: build.query<AuthenticationResponse, void>({
      query() {
        return {
          url: "/user"
        };
      }
    }),
    registerUser: build.mutation<AuthenticationResponse, RegisterCredentials>({
      query({ email, password, username }) {
        return {
          method: "POST", url: "/users",
          body: { user: { email, password, username } }
        };
      },
    }),
    loginUser: build.mutation<AuthenticationResponse, LoginCredentials>({
      query({ email, password }) {
        return {
          method: "POST", url: "/users/login",
          body: { user: { email, password } }
        };
      }
    })
  })
});

export const { useCurrentUserQuery, useLoginUserMutation, useRegisterUserMutation } = userService;