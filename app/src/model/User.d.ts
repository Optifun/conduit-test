export type User = {
  username: string;
  bio: string | null;
  image: string;
}

export type AuthData = User & {
  token: string;
}

export type ArticleAuthor = User & {
  following: boolean;
}
