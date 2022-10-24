import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlesRequest, ArticlesResponse } from "./requestTypes/articleService";
import { apiURL } from "../constants";


export const articleService = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: build => ({
    fetchFeed: build.query<ArticlesResponse, ArticlesRequest>({
      query(params) {
        return {
          params: params,
          url: "/articles/feed"
        }
      }
    }),
    fetchArticles: build.query<ArticlesResponse, ArticlesRequest>({
      query(params) {
        return {
          params: params,
          url: "/articles"
        }
      }
    })
  })
});


export const { useFetchArticlesQuery, useFetchFeedQuery } = articleService;

