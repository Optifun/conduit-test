import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface LayoutProps {
  children: ReactNode
}

export const MainLayout: React.FC = () => {
  return (
    <div>
      <header>
        <Link to="/">conduit</Link>
      </header>
      <Outlet/>
      <footer>Conduit App</footer>
    </div>
  );
};

