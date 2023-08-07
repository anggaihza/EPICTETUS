import {useState} from "react";
import mockPost from "../utils/posts.json";
import {CardPost} from "@/components/CardPost";
import {FeaturedPost} from "@/components/FeaturedPost";
import {SectionHeader} from "@/components/SectionHeader";
import Container from "@/components/Container";
import Head from "next/head";

export const Posts = () => {
  const [posts, setPosts] = useState(mockPost);

  return (
    <>
      <Container>
        {posts.length < 1 ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">
              No result <span className="text-5xl">😥</span>
            </h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
              We couldn't find any posts with keyword "qwerty". Please try
              another keyword
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-4">
            <SectionHeader>UI Design</SectionHeader>
            <div>
              <FeaturedPost />
            </div>
            {posts.map((post, idx) => (
              <div key={idx} className="md:w-4/12 w-full px-4 py-10">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};
