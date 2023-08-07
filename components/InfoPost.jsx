import React from "react";
import {PostMetaTitle} from "./PostMetaTitle";
import {PostAuthor} from "./PostAuthor";

export const InfoPost = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <div>
      <PostMetaTitle category={category} title={title} date={date} />
      <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </div>
  );
};
