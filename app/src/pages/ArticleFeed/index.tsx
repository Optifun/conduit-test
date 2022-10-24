import React, { useState } from 'react';
import { useAppDispatch } from "../../hooks";
import { ArticleList } from "./ArticleList";
import { useFetchArticlesQuery } from "../../services/articleService";
import { errorMessage } from "../../helpers/utils";



const ArticleFeed: React.FC = () => {
  const dispatch = useAppDispatch();
  const [ currentPage, setPage ] = useState(0);

  const { data: articleResponse, isLoading, isError, error } = useFetchArticlesQuery({
    limit: 10,
    offset: 10 * currentPage
  });

  const articles = articleResponse === undefined ? [] : articleResponse.articles;

  return (
    <div>
      <div>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && articles.length === 0 && <h2>There is no articles found</h2>}
        {!isLoading && articles.length && <ArticleList items={articles}/>}
        <div>
          {isError && errorMessage(error)}
        </div>
      </div>

    </div>
  );
}

export default ArticleFeed;
