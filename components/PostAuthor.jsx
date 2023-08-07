import React from "react";

export const PostAuthor = ({
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <div className="flex item-center mt-5">
        <img
          src={authorAvatar}
          alt=""
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="ml-6">
          <h3>{authorName}</h3>
          <div className="text-white/60 text-sm mt-1">{authorJob}</div>
        </div>
      </div>
    </>
  );
};
