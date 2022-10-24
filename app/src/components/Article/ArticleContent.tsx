import React from "react";
import { Article } from "../../model/Article";
import { Link } from "react-router-dom";
import { Tag } from "../Tags/Tag";
import { User } from "../../model/User";

interface ArticleContentProps {
  article: Article;
}

function ArticleActions(props: { author: User }) {
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

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => (
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
      <div>{article.tagList.map(t => (<Tag active={false} text={t}/>))}</div>
    </div>
    <div className="comment-section">
      <div className="comment-section__actions">
        <ArticleActions author={article.author}/>
      </div>
      <div className="comment-section__comments">

      </div>
    </div>
  </div>);