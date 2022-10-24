import React, { FC } from 'react';
import { useAppDispatch } from "../../hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchArticleBySlugQuery } from "../../services/articleService";
import { ArticleContent } from "../../components/Article/ArticleContent/ArticleContent";
import { errorMessage } from "../../helpers/utils";


const ArticleFullpage: FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  if (slug === undefined) {
    navigate("/not_found");
  }

  const { data, isLoading, isError, error, isSuccess } =
    useFetchArticleBySlugQuery(slug ?? "", { skip: slug === undefined });

  return (
    <>
      {isLoading && "Loading..."}
      {isSuccess && !isError && data !== undefined && <ArticleContent article={data}/>}
      <div>
        {isError && errorMessage(error)}
      </div>
    </>
  );
}

export default ArticleFullpage;
