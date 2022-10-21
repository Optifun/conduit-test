export interface User {
  username: string;
  bio: string | null;
  image: string;
}

export interface AuthData extends User {
  token: string;
}

export interface ArticleAuthor extends User {
  following: boolean;
}
