import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlesRequest, ArticlesResponse, SingleArticleResponse } from "./requestTypes/articleService";
import { apiURL } from "../constants";
import { Article } from "../model/Article";


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
    }),
    fetchArticleBySlug: build.query<Article, string>({
      query(slug: string) {
        return {
          url: `/articles/${slug}`
        }
      },
      transformResponse: (data: SingleArticleResponse) => {
        return data.article;
      },
      async onQueryStarted(arg: string, { dispatch, queryFulfilled }): Promise<void> {
        try {
          await queryFulfilled;
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
});



export const { useFetchArticlesQuery, useFetchFeedQuery, useFetchArticleBySlugQuery } = articleService;

