import { Tag } from "../../model/Article";
import { Tag as TagComponent } from "./Tag";
import React, { FC } from "react";

type TagsListProps = {
  tags: Tag[];
}

export const TagsList: FC<TagsListProps> = ({ tags }) =>
  <div>{tags.map(t => (
    <TagComponent active={false} text={t}/>))}
  </div>;