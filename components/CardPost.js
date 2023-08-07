import React from "react";
import {InfoPost} from "./InfoPost";
import Link from "next/link";

export const CardPost = ({thumbnail, ...infoPost}) => {
  return (
    <article>
      <Link href="/detail">
        <img src={thumbnail} alt="" className="w-full rounded mb-4" />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
};
