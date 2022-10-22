import React from "react";
import { NavLink } from "react-router-dom";

interface TagProps {
  text: string,
  active: boolean
}

export const Tag: React.FC<TagProps> = ({ text, active }) => (
  active ? <NavLink to="/" state={text}>{text}</NavLink> : <span>{text}</span>
);