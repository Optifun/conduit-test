import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../../model/Article";
import { TagsList } from "../../Tags/TagsList";
import "./articlePreview.css"

interface ArticlePreviewProps {
  article: Article;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> =
  ({
     article: {
       author,
       title,
       description,
       tagList,
       slug
     }
   }) => (
    <div className="article preview">
      <Link to={"/@" + author.username}>
        {author.username}
      </Link>
      <Link to={"article/" + slug}>
        <h4>{title}</h4>
      </Link>
      <div className="description">{description}</div>
      <div className="footer">
        <Link to={"article/" + slug}>
          <div>Read more...</div>
        </Link>
        <TagsList tags={tagList}/>
      </div>
    </div>
  );