import React from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { ArticleContent } from "../../components/Article/ArticleContent";


const ArticleFullpage: React.FC = () => {
  const { list: articles, errors, loading } = useAppSelector(state => state.articles);
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  return (
    <div>
      <ArticleContent article={articles[0]}/>
    </div>
  );
}

export default ArticleFullpage;
