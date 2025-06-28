import React from "react";

const PostDetailsSkeleton = () => {
  return (
    <div className="mt-5 gap-4 p-5 lg:p-0">
      <div className="text-2xl font-bold h-5 w-1/3 bg-gray-300 dark:bg-gray-500" />
      <div className="mt-4 w-full h-100 rounded-lg bg-gray-300 dark:bg-gray-500" />
      <div className="mt-4 bg-gray-300 dark:bg-gray-500 h-15" />
    </div>
  );
};

export default PostDetailsSkeleton;
