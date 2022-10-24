import React from "react";
import { Article } from "../../../model/Article";
import { TagsList } from "../../Tags/TagsList";
import { ArticleActions } from "../ArticleActions/ArticleActions";
import './articleContent.css'

type ArticleContentProps = {
  article: Article;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) =>
  (
    <article className="article fullPage">
      <div className="heading">
        <div className="title">
          {article.title}
        </div>
        <div className="actions">
          <ArticleActions author={article.author}/>
        </div>
      </div>
      <div>
        <div className="content">{article.body}</div>
        <TagsList tags={article.tagList}/>
      </div>
      <div className="comment-section">
        <div className="comment-section actions">
          <ArticleActions author={article.author}/>
        </div>
        <div className="comment-section comments">

        </div>
      </div>
    </article>
  );