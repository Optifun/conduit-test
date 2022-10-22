import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleFeed from "../pages/ArticleFeed";
import { MainLayout } from "../layout/MainLayout";
import ArticleFullpage from "../pages/Article/ArticleFullpage";

const RoutesRoot: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<ArticleFeed/>}/>
        <Route path="/@:username"/>
        <Route path="/article/:slug" element={<ArticleFullpage/>}/>
      </Route>

      <Route path="*" element={<h2>Not found</h2>}/>
    </Routes>
  );
};

export default RoutesRoot;
