import React, { useState } from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Pagination from "./Pagination";
import type { Post, PostsProps } from "@/interfaces";

const Posts = ({ limit = 10, isAllPosts = false }: PostsProps) => {
  const [page, setPage] = useState(1);
  const { data: posts, isFetching } = useQuery({
    queryKey: ["posts", page, limit],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );
      return res.json();
    },
  });
  if (isFetching) {
    return <Loading />;
  }
  return (
    <>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} isRecent={!isAllPosts} />
      ))}

      {isAllPosts && <Pagination currentPage={page} setCurrentPage={setPage} />}
    </>
  );
};

export default Posts;
