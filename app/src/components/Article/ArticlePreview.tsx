import React from "react";
import { Article } from "../../model/Article";
import { Link } from "react-router-dom";
import { Tag } from "../Tag";

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => (
  <div>
    <Link to={"/@" + article.author.username}>
      {article.author.username}
    </Link>
    <Link to={"article/" + article.slug}>
      <h4>{article.title}</h4>
    </Link>
    <div>{article.description}</div>
    <div>
      <div>Read more...</div>
      <div>{article.tagList.map(t => (<Tag active={false} text={t}/>))}</div>
    </div>
  </div>);