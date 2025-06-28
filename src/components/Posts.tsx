import React, { useState } from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";
import Pagination from "./Pagination";
import type { Post, PostsProps } from "@/types";

const Posts = ({ limit = 10, isAllPosts = false }: PostsProps) => {
  const [page, setPage] = useState(1);
  const {
    data: posts,
    isFetching,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["posts", page, limit],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );
      return res.json();
    },
  });
  if (isFetching) {
    return <Loading isRecent={!isAllPosts} numberOfCards={limit} />;
  }
  if (!posts || isError) {
    throw new Error("Failed to fetch posts");
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
