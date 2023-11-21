import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints, as recomende by RTK Query Documentation
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts/",
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = postApi;
