import React from "react";
import { NavLink } from "react-router-dom";
import "./tag.css"

interface TagProps {
  text: string,
  active: boolean
}

export const Tag: React.FC<TagProps> = ({ text, active }) => (
  active
    ? <NavLink to="/" state={text} className="tag active">{text}</NavLink>
    : <span className="tag">{text}</span>
);