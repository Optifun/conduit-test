import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleFeed from "../components/Feed/ArticleFeed";

const RoutesRoot: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleFeed />} />
      <Route path="/:username" />
      <Route path="/article/:title" />
    </Routes>
  );
};

export default RoutesRoot;
