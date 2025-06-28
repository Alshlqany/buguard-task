import React from "react";

const PostCardSkeleton = ({ isRecent = false }) => {
  return (
    <div
      className={`flex flex-col gap-6 ${
        isRecent
          ? `md:nth-[2]:flex-row md:nth-[3]:flex-row 
             xl:first:row-span-2 xl:nth-[4]:col-span-full xl:nth-[4]:flex-row xl:nth-[4]:[&>*]:flex-1`
          : ""
      }`}
    >
      <div className="relative min-h-[270px] min-w-[50%] bg-gray-300 dark:bg-gray-500"></div>
      <div className="flex flex-col gap-3 ">
        <div className="h-5 bg-gray-300 dark:bg-gray-500 w-1/2"></div>
        <div className="bg-gray-300 dark:bg-gray-500 h-10 w-3/4"></div>
        <div className="dark:bg-gray-500 h-15 w-6/7"></div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }, (_, i) => (
            <span
              key={i}
              className="w-15 h-5 text-sm rounded-full bg-gray-300 dark:bg-gray-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
