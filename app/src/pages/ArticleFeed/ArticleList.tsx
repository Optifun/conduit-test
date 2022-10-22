import React from "react";
import { Article } from "../../model/Article";
import { ArticlePreview } from "../../components/Article/ArticlePreview";

interface ArticleListProps {
  items: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ items }) => {

  return (
    <div>
      <h3>Articles:</h3>
      {items.map(article => <ArticlePreview article={article}/>)}
    </div>
  );
}