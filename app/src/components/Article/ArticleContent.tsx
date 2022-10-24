import React from "react";
import { Article } from "../../model/Article";
import { TagsList } from "../Tags/TagsList";
import { ArticleActions } from "./ArticleActions";

type ArticleContentProps = {
  article: Article;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) =>
  (
    <div>
      <div className="article-heading">
        <div className="article-heading__title">
          {article.title}
        </div>
        <div className="article-heading__actions">
          <ArticleActions author={article.author}/>
        </div>
      </div>
      <div>
        <pre>{article.body}</pre>
        <TagsList tags={article.tagList}/>
      </div>
      <div className="comment-section">
        <div className="comment-section__actions">
          <ArticleActions author={article.author}/>
        </div>
        <div className="comment-section__comments">

        </div>
      </div>
    </div>
  );