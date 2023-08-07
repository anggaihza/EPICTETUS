import Link from "next/link";
import React from "react";

export const PostMetaTitle = ({category, title, date, center}) => {
  return (
    <>
      <div className="flex item-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="uppercase">{date}</div>
      </div>
      <h2 className={`text-2xl mt-6 ${center ? "text-center" : ""}`}>
        <Link href="/detail"> {title}</Link>
      </h2>
    </>
  );
};
