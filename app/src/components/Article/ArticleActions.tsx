import { ArticleAuthor } from "../../model/User";
import { Link } from "react-router-dom";
import React from "react";

export function ArticleActions(props: { author: ArticleAuthor }) {
  return (
    <div className="article-actions">
      <Link to={"/@" + props.author.username}>
        {props.author.username}
      </Link>
      <button>Follow {props.author.username}</button>
      <button>Favourite Article</button>
    </div>
  );
}