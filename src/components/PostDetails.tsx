"use client";
import Loading from "@/components/Loading/Loading";
import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const PostDetails = ({ id }: { id: string }) => {
  const { data, isFetching, isError } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return res.json();
    },
  });

  if (isFetching) {
    return <Loading isPost />;
  }
  console.log(data);
  if (!data || !Object.keys(data).length || isError) {
    throw new Error("Failed to fetch post details");
  }
  return (
    <div className="mt-8 px-5 max-w-4xl mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold mb-5 dark:text-gray-200">
        {data.title}
      </h1>

      <div className="rounded-2xl overflow-hidden">
        <Image
          src={`/${(+id % 3) + 1}.jpg`}
          alt={data.title}
          width={1200}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <article className="mt-6 text-xl leading-relaxed dark:text-gray-400">
        {data.body}
      </article>
    </div>
  );
};

export default PostDetails;
