import React from "react";
import PostCardSkeleton from "./PostCardSkeleton";
import PostDetailsSkeleton from "./PostDetailsSkeleton";
import { LoadingProps } from "@/types";

const Loading = ({
  isRecent = false,
  numberOfCards = 1,
  isPost = false,
}: LoadingProps) => {
  if (isPost) return <PostDetailsSkeleton />;
  return (
    <>
      {Array.from({ length: numberOfCards }, (_, i) => (
        <PostCardSkeleton key={i} isRecent={isRecent} />
      ))}
    </>
  );
};

export default Loading;
