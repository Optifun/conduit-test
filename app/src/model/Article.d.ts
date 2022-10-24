import { ArticleAuthor } from "./User";

export type Tag = string;

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean | null;
  favoritesCount: number;
  author: ArticleAuthor;
};