export interface SetIsOpen {
  setIsOpen: (isOpen: boolean) => void;
}

export interface NavMenuProps extends SetIsOpen {
  isOpen?: boolean;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsProps {
  limit?: number;
  isAllPosts?: boolean;
}

export interface PostCardProps {
  post: Post;
  isRecent?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface TagColor {
  text: string;
  bg: string;
}

export type Category =
  | "Design"
  | "Research"
  | "Presentation"
  | "Tools"
  | "Development"
  | "SaaS";
