import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

export const AppHeader: React.FC = () => {
  return (
    <header>
      <Link to="/" className="app-name">Conduit</Link>
    </header>
  );
}