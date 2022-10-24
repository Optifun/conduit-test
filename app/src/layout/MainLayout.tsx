import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "../components/AppHeader/AppHeader";
import './mainLayout.css'


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

