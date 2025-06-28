import Image from "next/image";
import React from "react";
import ArrowUpRight from "./icons/ArrowUpRight";
import Badge from "./Badge";
import { motion } from "framer-motion";
import type { PostCardProps } from "@/interfaces";

const PostCard = ({ post, isRecent = false }: PostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex flex-col gap-6 ${
        isRecent
          ? `md:nth-[2]:flex-row md:nth-[3]:flex-row 
             xl:first:row-span-2 xl:nth-[4]:col-span-full xl:nth-[4]:flex-row xl:nth-[4]:[&>*]:flex-1`
          : ""
      }`}
    >
      <div className="relative min-h-[270px] w-full">
        <Image
          src={`/${(post.id % 3) + 1}.jpg`}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col  gap-6">
        <p className="text-lg text-[#6941C6] font-semibold">
          Sunday, 1 Jan 2023
        </p>

        <div className="flex justify-between gap-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <ArrowUpRight />
        </div>
        <p className="text-gray-600">
          {post.body.length >= 90 ? post.body.substr(0, 90) + "..." : post.body}
        </p>

        <div className="flex flex-wrap gap-2">
          {Array.from({ length: Math.random() * 3 + 1 }, (_, i) => (
            <Badge key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
