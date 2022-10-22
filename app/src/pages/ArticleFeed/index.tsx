import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchArticles } from "../../store/articleSlice";
import { ArticleList } from "./ArticleList";


const ArticleFeed: React.FC = () => {
  const { list: articles, errors, loading } = useAppSelector(state => state.articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => dispatch(fetchArticles()))()
  }, [])

  return (
    <div>
      <body>
      {loading && <h2>Loading...</h2>}
      {!loading && articles.length == 0 && <h2>There is no articles found</h2>}
      {!loading && articles.length && <ArticleList items={articles}/>}
      <div>
        {errors.map(e => <span>{e}</span>)}
      </div>
      </body>

    </div>
  );
}

export default ArticleFeed;
