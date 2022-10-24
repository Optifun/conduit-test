import { ArticleAuthor } from "../../../model/User";
import { Link } from "react-router-dom";
import React from "react";
import './articleActions.css'

export function ArticleActions(props: { author: ArticleAuthor }) {
  return (
    <div className="article-actions">
      <span className="username-avatar"><img src={props.author.image}/></span>
      <Link to={"/@" + props.author.username}
            className="username-link">
        {props.author.username}
      </Link>
      <button className="follow-button">Follow {props.author.username}</button>
      <button className="favourite-button">Favourite Article</button>
    </div>
  );
}