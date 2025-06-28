import { Category, TagColor } from "@/interfaces";
import React from "react";

const tagColors: TagColor[] = [
  { text: "#6941C6", bg: "rgb(236, 231, 250)" },
  { text: "#3B82F6", bg: "rgb(227, 235, 248)" },
  { text: "#10B981", bg: "rgb(227, 247, 240)" },
  { text: "#C11574", bg: "rgb(250, 247, 232)" },
];
const allCategories: Category[] = [
  "Design",
  "Research",
  "Presentation",
  "Tools",
  "Development",
  "SaaS",
];

const Badge = () => {
  const category =
    allCategories[Math.floor(Math.random() * allCategories.length)];
  const color = tagColors[Math.floor(Math.random() * tagColors.length)];
  return (
    <span
      className="px-3 py-1 text-sm rounded-full"
      style={{
        backgroundColor: color.bg,
        color: color.text,
      }}
    >
      {category}
    </span>
  );
};

export default Badge;
