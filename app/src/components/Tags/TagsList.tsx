import { Tag } from "../../model/Article";
import { Tag as TagComponent } from "./Tag";
import React, { FC } from "react";
import "./tag.css"

type TagsListProps = {
  tags: Tag[];
}

export const TagsList: FC<TagsListProps> = ({ tags }) =>
  <div className="tag-list">{tags.map(t => (
    <TagComponent key={t} active={false} text={t}/>))}
  </div>;