import React from "react";
import { Outlet } from "react-router-dom";
import './style.css'
import { AppHeader } from "../components/AppHeader/AppHeader";


export const MainLayout: React.FC = () => {
  return (
    <div>
      <AppHeader/>
      <div className="container">
        <Outlet/>
      </div>
      <footer>Conduit App</footer>
    </div>
  );
};

