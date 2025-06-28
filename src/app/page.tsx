"use client";
import BlogHeader from "@/components/BlogHeader";
import Posts from "@/components/Posts";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <div className="flex flex-col p-8 gap-10 ">
        <h2 className="font-[600] text-2xl mt-9">Recent blog posts</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 gap-10">
          <Posts limit={4} />
        </div>
        <h2 className="font-[600] text-2xl mt-9">All blog posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <Posts limit={6} isAllPosts />
        </div>
      </div>
    </>
  );
};

export default Blog;
