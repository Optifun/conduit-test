import React from "react";
import { Article } from "../../model/Article";
import { Link } from "react-router-dom";

export const ArticleList: React.FC<{ items: Article[] }> = ({ items }) => {
  return (
    <>
      <h3>Articles:</h3>
      {items.map(article =>
        (
          <div>
            <Link to={"article/" + article.slug}>
              <h4>{article.title}</h4>
            </Link>
            <pre>
              {article.description}
            </pre>
            {article.body}
          </div>
        ))}
    </>)
}