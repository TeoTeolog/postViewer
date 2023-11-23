import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints, as recomende by RTK Query Documentation
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getPostsSlice: builder.query({
      query: (params) => `posts?_start=${params.start}&_limit=${params.limit}`,
    }),
  }),
});

export const { useGetPostByIdQuery, useGetPostsSliceQuery } = postApi;
