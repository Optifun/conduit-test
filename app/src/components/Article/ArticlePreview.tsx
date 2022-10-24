import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../model/Article";
import { TagsList } from "../Tags/TagsList";

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
      <TagsList tags={article.tagList}/>
    </div>
  </div>);