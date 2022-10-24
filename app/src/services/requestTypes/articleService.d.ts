import { Article } from "../../model/Article";

type ArticlesRequest = {
  limit?: number
  offset?: number
}

type ArticlesResponse = {
  articles: Article[],
  articlesCount: number
}
